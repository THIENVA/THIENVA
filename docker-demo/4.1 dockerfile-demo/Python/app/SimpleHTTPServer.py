from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import yaml

class SimpleHTTPServer(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path in allowed_paths:
            self.send_response(200)
            self.end_headers()
        else:
            self.send_response(403)
            self.end_headers()

with open(os.environ['CONFIG_PATH']) as config:
    print('Reading configuration file...')
    config = yaml.load(config, Loader=yaml.FullLoader)
    allowed_paths = config['allowed_paths']
    print('Allowed paths: ', allowed_paths)

server_address = ('', 8000)
httpd = HTTPServer(server_address, SimpleHTTPServer)
print('Starting HTTP server...')
httpd.serve_forever()
