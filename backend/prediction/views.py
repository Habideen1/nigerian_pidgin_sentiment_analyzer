
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import logging

from .serializers import PredictionSerializer
from .inference import predict_sentiment


logger = logging.getLogger(__name__)


class PredictAPIView(APIView):

    def post(self, request):

        serializer = PredictionSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "success": False,
                    "message": "Validation failed.",
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:

            text = serializer.validated_data["text"]

            prediction = predict_sentiment(text)

            return Response(
                {
                    "success": True,
                    "message": "Prediction completed successfully.",
                    "data": {
                        "text": text,
                        "prediction": prediction,
                    },
                },
                status=status.HTTP_200_OK,
            )

        except Exception:

            logger.exception("Prediction failed.")

            return Response(
                {
                    "success": False,
                    "message": "An unexpected error occurred while processing the prediction.",
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )