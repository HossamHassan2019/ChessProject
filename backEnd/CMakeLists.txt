cmake_minimum_required(VERSION 3.2)
project(chessApp)
add_subdirectory(lib/Crow)
include_directories(lib/Crow/include)
add_executable(chessApp src/main.cpp)