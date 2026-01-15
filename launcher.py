"""
IMPORTS
"""
from http.server import SimpleHTTPRequestHandler, HTTPServer
import webbrowser
import os
import sys

"""
SETTINGS
"""

NAME = "localhost"
DIRECTORY = os.getcwd()
DEFAULT_PORT = 8080

# Static mappings
PORT_MAP = {
    "pokes": 8070,
    "cam": 8071,
    "leah": 8072,
    "proxies": 8080
}

# Generate FF1 through FF16 (8081 -> 8096)
for i in range(1, 17):
    PORT_MAP[f"ff{i}"] = 8080 + i

# Determine Port
if len(sys.argv) > 1:
    key = sys.argv[1].lower()
    if key in PORT_MAP:
        PORT = PORT_MAP[key]
    elif key.isdigit():
        PORT = int(key)
    else:
        PORT = DEFAULT_PORT
else:
    PORT = DEFAULT_PORT

"""
REQUEST HANDLER
"""

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

"""
START APP
"""

if __name__ == "__main__":
    webServer = HTTPServer((NAME, PORT), Handler)
    print(f"Server started http://{NAME}:{PORT}")

    try:
        webbrowser.open(f'http://{NAME}:{PORT}', new=2)
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
    