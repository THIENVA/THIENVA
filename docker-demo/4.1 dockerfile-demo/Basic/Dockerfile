FROM ubuntu:latest

ADD hello-script.sh /home/ubuntu/hello-script.sh
RUN chmod +x /home/ubuntu/hello-script.sh
ENV Hello_ENV="Hello from basic Docker container!"
ENTRYPOINT /home/ubuntu/hello-script.sh
