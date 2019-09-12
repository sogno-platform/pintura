
GIT_RESULT=$(git pull)
while true;
do
  sleep 2m
  if [ "x$GIT_RESULT" = "xAlready up to date." ]
  then
    echo "true: "$GIT_RESULT
  else
    echo "false: "$GIT_RESULT
    make all
    make stop
    make start
  fi
done

