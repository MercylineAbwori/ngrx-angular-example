export class StatusCodeDescriptor {
 
  static codeMessage(statusCode: number) {

    var message = "";

    if (statusCode == 200){
      message = "Ok";
    }else if (statusCode == 400){
      message = "Bad Request Error";
    }else if (statusCode == 401){
      message = "Authorization Error.";
    }else if (statusCode == 404){
      message = "Item Not Found Error.";
    }else if (statusCode == 408){
      message = "Request Timeout Error.";
    }else if (statusCode == 417){
      message = "Expectation Failed Error.";
    }else if (statusCode == 423){
      message = "This request cannot be completed at the moment. Please try again later.";
    }else if (statusCode == 429){
      message = "This request cannot be completed at the moment. Please try again later.";
    }else if (statusCode == 501){
      message = "Not Implemented Error.";
    }else if (statusCode == 502){
      message = "Bad Gateway Error.";
    }else if (statusCode == 503){
      message = "Our servers are currently under maintenance. Please try again later.";
    }else if (statusCode == 510){
      message = "Not Extended Error.";
    }else if (statusCode == 598){
      message = "Network Timeout Error.";
    }else if (statusCode == 600 || statusCode == 0){
      message = "Connection Error.";
    }else if (statusCode == 601){
      message = "Parse Error.";
    }else if (statusCode == 800){
      message = "Unknown Error.";
    }else {

      if (String(statusCode).startsWith("5")){
        message = "Internal Server Error.";
      }else{
        message = "Unknown Server Error.";
      }
    }

    return message;    
  }
}