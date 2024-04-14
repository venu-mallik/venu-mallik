
|Operation             |Spark (PySpark)                                       |SQL                                                                    |Pandas                                          |
|----------------------|------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------|
|Load Data (CSV)       |df = spark.read.csv("data.csv")                       |SELECT * FROM data.csv                                                 |df = pd.read_csv("data.csv")                    |
|Load Data (Parquet)   |df = spark.read.parquet("data.parquet")               |(Not directly supported)                                               |df = pd.read_parquet("data.parquet")            |
|Filter                |df.filter(col("column") > 10)                         |SELECT * FROM table WHERE column > 10                                  |df[df['column'] > 10]                           |
|Select Columns        |df.select("column1", "column2")                       |SELECT column1, column2 FROM table                                     |df[["column1", "column2"]]                      |
|Sort (ascending)      |df.sort("column", ascending=True)                     |SELECT * FROM table ORDER BY column ASC                                |df.sort_values(by="column", ascending=True)     |
|Sort (descending)     |df.sort("column", ascending=False)                    |SELECT * FROM table ORDER BY column DESC                               |df.sort_values(by="column", ascending=False)    |
|Group By & Aggregation|df.groupBy("column1").agg(count("column2"))           |SELECT column1, COUNT(column2) FROM table GROUP BY column1             |df.groupby('column1')['column2'].count()        |
|Find Duplicates       |df.distinct()                                         |SELECT DISTINCT * FROM table                                           |df.drop_duplicates()                            |
|Limit Rows            |df.limit(10)                                          |SELECT * FROM table LIMIT 10                                           |df.head(10)                                     |
|Union DataFrames      |df1.union(df2)                                        |(Not directly supported with raw UNION)                                |pd.concat([df1, df2], ignore_index=True)        |
|Join DataFrames       |df1.join(df2, on=["column"], how="inner")             |SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column|pd.merge(df1, df2, on='column', how='inner')    |
|Left Join DataFrames  |df1.join(df2, on=["column"], how="left")              |SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column |pd.merge(df1, df2, on='column', how='left')     |
|Right Join DataFrames |df1.join(df2, on=["column"], how="right")             |SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column|pd.merge(df1, df2, on='column', how='right')    |
|Replace Missing Values|df.fillna(value_to_replace)                           |UPDATE table SET column = value_to_replace WHERE column IS NULL        |df.fillna(value_to_replace)                     |
|Create New Column     |df.withColumn("new_column", expr("column1 * column2"))|(Not directly supported, requires data manipulation)                   |df['new_column'] = df['column1'] * df['column2']|
|Drop Columns          |df.drop("column_to_drop")                             |ALTER TABLE table DROP COLUMN column_to_drop                           |df.drop('column_to_drop', axis=1)               |
|Rename Columns        |df.withColumnRenamed("old_name", "new_name")          |ALTER TABLE table RENAME COLUMN old_name TO new_name                   |df.rename(columns={'old_name': 'new_name'})     |
