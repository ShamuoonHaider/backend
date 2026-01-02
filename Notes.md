Hello Dev!

How DNS Works

DNS(Domain Name System): The browser sends a DN
S query to resolve the domain into an IP address.

DNS server: Provides the correct IP address for the domain.

Browser Connects the borwser uses the IP to connect the web server and loads the website

- Node js is single threaded

data transfer in form of streams by breaking into small chunks

Event Loop

- Timers: This phase executes callbacks schedules by setTimeout() and setInterval().

- Pendign callbacks: executes I/O callbacks deferred to the next loop iteration.

- idle, prepare: only used internally.
- Pool: retrieve new I/O events: executes I/O realted callbacks(almost all with the execption of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- check: setImmediate() callback are invoked here.
- close callbacks: some close callbacks, e.g, socket.on("close",...)
