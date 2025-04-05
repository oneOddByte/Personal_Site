import subprocess

# subprocess.run(["git add ."])

with open("count.txt", "w+") as file:
    num = int(file.read())
    # subprocess.run([f'git commit -m "{num + 1}"'])
    file.write(str(num + 1))
