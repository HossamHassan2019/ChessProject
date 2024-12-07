#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include "crow.h"
enum color{
    WHITE = 0 , 
    BLACK =1 
};
class Piece
{
    public : 
     color co ; 
     Piece(color co):co{co}{} 
};

void parseFen(std::string& fen){
    std::string PiecePos{};
    char color{};
    std::string castlingRights{};
    std::string enPassant{};
    int halfMoveClock{};
    int fullMoveNumber{};

    std::istringstream iss{fen};
    iss>>PiecePos>>color>>castlingRights>>enPassant>>halfMoveClock>>fullMoveNumber;
    std::vector<std::string> pos{}; 
    
    std::istringstream ist{PiecePos};

    std::string raw{};
    while(getline(ist , raw , '/')) pos.push_back(raw);
    for(auto& raw : pos ){
            
            
            for(auto&c : raw){
                if(std::isdigit(c)){
                    //file << std::setw(c - '0') << std::setfill('*')  ; 
                    for(int i = 0 ; i < (c - '0') ; i++) std::cout << "-"<<" ";
                }
                else{
                    std::cout << c <<" ";
                }
            }
            std::cout << std::endl ; 
            

        }
}
int main() {
    std::string fen{};
    crow::SimpleApp app;

    // POST Route: Send a string to store
    CROW_ROUTE(app, "/set_message").methods(crow::HTTPMethod::Post)([](const crow::request& req) {
        std::string received_message = req.body;

        if (received_message.empty()) {
            return crow::response(400, "Error: Empty message is not allowed.");
        }

        
        crow::json::wvalue response;
        response["status"] = "success";
        response["sent_message"] = received_message;
        parseFen(received_message);
        response["message"] = received_message;;
        // std::cout << received_message << std::endl;
        // std::cout<<std::endl;
        
        return crow::response(200, response);
    });
    
    app.port(8080).multithreaded().run();
    return 0 ; 
}