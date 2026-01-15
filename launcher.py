"""
IMPORTS
"""
from http.server import SimpleHTTPRequestHandler, HTTPServer
import webbrowser
import os

"""
SETTINGS
"""

NAME = "localhost"
# regular pokes (outdated) at 8080
# ub pokes at 8090
# three kingdoms at 8091
# Cam & Alex at 8092
# Leah at 8094
# FF1 & 2 at 8095
# Dragons & Other Proxies at 8096
# FF3 at 8097
PORT = 8097
DIRECTORY = os.getcwd()

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
    print("Server started http://%s:%s" % (NAME, PORT))

    try:
        webbrowser.open('http://localhost:'+str(PORT), new=2)
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
