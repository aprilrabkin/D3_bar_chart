require 'sinatra'
require 'bundler'
require 'pry'
require 'json'

Bundler.require
set :database, {adapter: "postgresql", username: "aprilrabkin", database: "ChatID_data"}

get '/' do

	@sql_table = ActiveRecord::Base.connection.query("select hour, count(case when participants = 1 then 1 end) *100 / count(*)  as pct_fail
from
(select session_id, extract(hour from min(timestamp - interval '5 hour')) as hour, count(distinct nick) as participants
from muc_messages 
where body != ''
group by session_id) x
group by hour
order by hour")
  erb :index
end

# select hour, count(case when participants = 1 then 1 end) as fail, count(*) as all, count(case when participants = 1 then 1 end) *100 / count(*)  as pct_fail
# from
# (select session_id, extract(hour from min(timestamp - interval '5 hour')) as hour, count(distinct nick) as participants
# from muc_messages 
# where body != ''
# group by session_id) x
# group by hour
# order by hour