FROM gcc:latest as build-stage

WORKDIR /app

RUN apt update && apt install -y \
    git \
    cmake \
    libasio-dev 

COPY . . 




#RUN git submodule update --init --recursive


WORKDIR /app/build


RUN cmake .. && make 



FROM  ubuntu:latest  as runtime-stage

WORKDIR app 

RUN apt update 
    #apt install -y libboost-all-dev



COPY --from=build-stage /app/build/chessApp  /app/chessApp

EXPOSE 8080 

CMD ["./chessApp"]

