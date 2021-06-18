"""
利用python一键生成三个标签页，之改写manifest文件即可。
"""
import json
import shutil
from os.path import *


def load(s):
    return json.load(open(s))


def save(s, content):
    json.dump(content, open(s, 'w'), ensure_ascii=False, indent=2)


for i in ['history', 'bookmark']:
    if exists(i):
        shutil.rmtree(i)
    shutil.copytree("newtab", i)
    config = load(f"{i}.json")
    manifest = load("newtab/manifest.json")
    manifest.update({
        "name": config['name'],
        "description": config['description'],
        "chrome_url_overrides": {
            config["chrome_override"]: "newtab.html"
        }
    })

    save(f"{i}/manifest.json", manifest)
    shutil.copy(f"{i}.json", f"{i}/{i}.json")
