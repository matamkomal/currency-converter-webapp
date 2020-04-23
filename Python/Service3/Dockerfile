FROM ubuntu:18.04

RUN apt-get -y update

RUN apt-get -y upgrade

RUN apt-get install -y --no-install-recommends \
      build-essential \
      git \
      libgoogle-glog-dev \
      libgtest-dev \
      libleveldb-dev \
      liblmdb-dev \
      libprotobuf-dev \
      protobuf-compiler

RUN apt-get install -y python3
RUN apt install -y python3-pip


COPY TimeSeriesFolder /app

WORKDIR /app

RUN pip3 install -r requirements.txt

EXPOSE 8083

ENTRYPOINT ["python3", "timeseries.py"]
