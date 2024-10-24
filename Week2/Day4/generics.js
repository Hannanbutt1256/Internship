// Generic function that logs the response
function handleApiResponse(response) {
    console.log("Status: ".concat(response.status));
    console.log("Message: ".concat(response.message));
    console.log("Data:", response.data);
}
handleApiResponse({ status: 202, message: "Working", data: { name: "Hannan" } });
