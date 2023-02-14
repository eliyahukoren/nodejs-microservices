Simple blog application
Create post and allowing users to comment on them.


```
git rm --cached -r <directory>

or

git rm -r --cached .
```

## Services:

**Event Bus Service**: listening port 4005

**Query Service**: listening port 4002

**Posts Service**: listening port 4000

**Comments Service**: listening port 4001

Routes:

	(1) /posts/:id/comments, method: GET

	(2) /posts/:id/comments, method: POST

		Save comment by post Id and send "CommentCreated" event to **Event Bus Service**.

	(3) /events, method POST

		logic not yet implemented.

## Client:

Port 3000
