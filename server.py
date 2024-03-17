from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class RequestHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header(Access-Control-Allow-Origin, httplocalhost8000)
        self.send_header(Access-Control-Allow-Methods, GET, POST, OPTIONS)
        self.send_header(Access-Control-Allow-Headers, Content-Type)
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self.send_header(Content-type, texthtml)
        self.end_headers()
        # Your GET response handling code goes here

    # Add other HTTP methods handling (POST, etc.) if needed

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()
if __name__ == "__main__":

    run()
