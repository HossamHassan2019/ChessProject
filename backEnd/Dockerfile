FROM gcc:latest as build-stage

WORKDIR /app

RUN apt update && apt install -y \
    git \
    cmake \
    libasio-dev 

COPY . . 


#RUN git clone  https://github.com/CrowCpp/Crow.git  /app/lib


WORKDIR /app/build


RUN cmake .. && make 



FROM  alpine:latest  as runtime-stage

WORKDIR app 

RUN apt update 
    #apt install -y libboost-all-dev



COPY --from=build-stage /app/build/chessApp  /app/chessApp

EXPOSE 8080 

CMD ["./chessApp"]

