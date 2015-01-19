
This bar chart shows the rate of 'unsuccessful chats' in the average day, from midnight to midnight East Coast time. I used Postgressql, Ruby, and D3.


To see the bar chart in your browser: 
1. run "bundle install" in terminal, to pull down the Ruby gems.
2. Turn on postgres server.
3. In terminal, type: createdb ChatID
4. In terminal, to restore the database from the .dump file, type: 
	pg_restore --verbose --clean --no-acl --no-owner -h localhost -d ChatID coding_challenge_db.dump
5. Run "ruby router.rb" in terminal to start the Sinatra server
6. Open your browser to localhost:4567