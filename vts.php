<?php

/*
** Connect to database:
*/

// Connect to the database (host, username, password)
$con = mssql_connect('localhost','admin','foo')
or die('Could not connect to the server!');

// Select a database:
mssql_select_db('Northwind')
or die('Could not select a database.');

// Example query: (TOP 10 equal LIMIT 0,10 in MySQL)
$SQL = "SELECT TOP 10 * FROM ExampleTable ORDER BY ID ASC";

// Execute query:
$result = mssql_query($SQL)
or die('A error occured: ' . mysql_error());

// Get result count:
$Count = mssql_num_rows($result);
print "Showing $count rows:<hr/>\n\n";

// Fetch rows:
while ($Row = mssql_fetch_assoc($result)) {

    print $Row['Fieldname'] . "\n";

}

mssql_close($con);