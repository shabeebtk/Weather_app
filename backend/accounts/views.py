# restframework 
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import obtain_auth_token
from .permissions import IsSuperUser

# serializer 
from .serializers import UserSerializer

# models 
from .models import User


class RegisterNewUser(APIView):
    def post(self,request):
        email = request.data.get("email")
        name = request.data.get("name")

        print(email, name)
        try:    
            # check user already exists 
            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                # token 
                token, created = Token.objects.get_or_create(user=user)
                serializer = UserSerializer(user)
                return Response({
                    'user': serializer.data,
                    'token': token.key
                })
                
            # creating new user
            user = User.objects.create_user(
                username = email,
                password = "nopassword",
                email = email,
                first_name = name,
            )
            user.save()
            
            # token 
            token, created = Token.objects.get_or_create(user=user)
            serializer = UserSerializer(user)
            
            return Response({
                'user': serializer.data,
                'token': token.key
            })
        
        except:
            return Response({"message":"User creation failed"}, status=status.HTTP_400_BAD_REQUEST)
        

# get all users 
class GetAllUsers(APIView):
    # check user is superuser and authenticated 
    permission_classes = ( IsAuthenticated, IsSuperUser)
    
    def get(self, request):
        print(request.user)
        users = User.objects.filter(is_superuser=False)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
        
        
    
    
