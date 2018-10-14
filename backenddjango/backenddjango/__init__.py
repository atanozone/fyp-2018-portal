## Used pymysql as mysqldb to make it work with virtualenv
## Alternatively, can add mysql-python to virtualenv by editing the 
import pymysql 
pymysql.install_as_MySQLdb()