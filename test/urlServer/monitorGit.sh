
while true;
do
  GIT_RESULT=$(git pull)
  if [ "x$GIT_RESULT" = "xAlready up to date." ]
  then
    echo "true: "$GIT_RESULT
  else
    echo "false: "$GIT_RESULT
    make all
    make stop
    make start
  fi
  sleep 2m
done

