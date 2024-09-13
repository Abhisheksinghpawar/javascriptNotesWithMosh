#Python does not have a straight forward multithreading due to a Global interpreter lock
#This is how we cna do python multithreading

import threading
import time

done = False

def worker(greeting):
    counter = 1
    while not done:
        time.sleep(1)
        print(greeting, counter)
        counter +=1

threading.Thread(target=worker, daemon=True,args=("Hello",)).start()
threading.Thread(target=worker, daemon=True,args=("Namaste",)).start()

input("Press Enter to Quit\n")

done = True
