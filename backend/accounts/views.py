# restframeworks 
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

# models 
from django.contrib.auth import authenticate, login
from .models import User

# serializers 
from .serializers import UserSerializer


class GoogleLogin(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        print(request.data)
        access_token = request.data.get('access_token')        
        user = authenticate(request, access_token=access_token)
        
        if user:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            google_data = request.session.get('socialaccount')
            print(google_data, 'google data-------')
            email = google_data.get('extra_data', {}).get('email', None)
            
            user = User.objects.create_user(
                username=email,  
                email=email,
                password=''
            )
            login(request, user)
            serializer = UserSerializer(user)
            return Response(serializer.data)
            