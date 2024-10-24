interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
  }
  
  // Generic function that logs the response
  function handleApiResponse<T>(response: ApiResponse<T>): void {
    console.log(`Status: ${response.status}`);
    console.log(`Message: ${response.message}`);
    console.log(`Data:`, response.data);
  }
handleApiResponse<object>({status:202,message:"Working",data:{name:"Hannan"}})