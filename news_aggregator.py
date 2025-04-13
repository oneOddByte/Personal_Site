# pylint: disable=invalid-name

import subprocess
from datetime import datetime

import requests
from bs4 import BeautifulSoup


def GetNews(url, tag):
    response = requests.get(url, timeout=100)
    soup = BeautifulSoup(response.text, "lxml")

    data = soup.find_all(tag)

    content = []
    for line in data:
        content.append(line.text.strip())

    return content


def ConvertToOrderedList(content):
    html = "<ol>"

    for line in content:
        html += f"<li>{line}</li>"

    html += "</ol>"

    return html


def ConvertNewsToHTML(sources):
    header = f"""<!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title></title>
            <link href="news.css" rel="stylesheet" />
        </head>
        <body>
            <h3>Last updated: {dateTime}</h3>
            <br /><br />
    """

    footer = """</body>
    </html>
    """
    finalNews = header

    for region, urlAndTag in sources.items():
        finalNews += f"<h1>{region} Headlines</h1>"
        for url, tag in urlAndTag:
            temp_news = GetNews(url, tag)
            temp_news = ConvertToOrderedList(temp_news)
            finalNews += temp_news
            finalNews += "<br>"

    finalNews += footer

    return finalNews


def WriteToFile(path, data):
    with open(path, "w") as file:
        file.write(data)
    file.close()


pathToDir = "../../ui test/news.html"
dateTime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

newsSources = {
    "Tamil Nadu": [["https://www.thehindu.com/news/national/tamil-nadu/", "h3"]],
    "World": [["https://www.bbc.com/news/world", "h2"]],
}

news = ConvertNewsToHTML(newsSources)
WriteToFile("news.html", news)

# subprocess.run(["make"], cwd="news.html")
