from rest_framework import serializers


class PredictionSerializer(serializers.Serializer):
    text = serializers.CharField(
        max_length=5000,
        required=True,
        allow_blank=False,
        trim_whitespace=True,
    )

    def validate(self, attrs):
        """
        Validate raw request data.
        """

        original_text = self.initial_data.get("text")

        if not isinstance(original_text, str):
            raise serializers.ValidationError(
                {
                    "text": "Text input must be a string."
                }
            )

        return attrs