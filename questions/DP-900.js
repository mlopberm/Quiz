// questions/DP-900.js
export const questions = [
  {
    id: 1,
    question:
      "Which type of data structure should you use to optimize create, read, update, and delete (CRUD) operations for data saved in a multi-column tabular format?",
    options: [
      { id: 0, text: "Relational database" },
      { id: 1, text: "Key/value store" },
      { id: 2, text: "Document database" },
      { id: 3, text: "Graph database" },
    ],
    answer: 0,
    explanation:
      "A relational database is the best option for CRUD operations and uses the least amount of storage space. A key/value store is used for simple lookups based on a single key to obtain a single value. A document database uses unstructured data such as JSON, and is optimized for retrieval, not CRUD operations. A graph database is used to store hierarchical data, such as organizational charts that have nodes and edges.",
    type: "single",
  },
  {
    id: 2,
    question:
      "Which Azure data service allows you to store images, PDF files, and static JSON files?",
    options: [
      { id: 0, text: "Azure Blob storage" },
      { id: 1, text: "Azure Table storage" },
      { id: 2, text: "Azure Cosmos DB for Apache Gremlin" },
      { id: 3, text: "Azure SQL Database" },
    ],
    answer: 0,
    explanation:
      "Blob storage is the best option for file storage. Table storage is not suited for files. Azure Cosmos DB for Apache Gremlin is used to store hierarchical data, such as organizational charts that have nodes and edges. Azure SQL Database is the best option for create, read, update, and delete (CRUD) operations and uses the least amount of storage space, but our solution does not require a database management system (DBMS).",
    type: "single",
  },
  {
    id: 3,
    question:
      "You have a folder that contains documents, images, and audio files. Which type of data do you have?",
    options: [
      { id: 0, text: "Unstructured" },
      { id: 1, text: "Structured" },
      { id: 2, text: "Semi-structured" },
      { id: 3, text: "Relational" },
    ],
    answer: 0,
    explanation:
      "Unstructured data contains data such as documents, images, audio data, video data, and binary files.",
    type: "single",
  },
  {
    id: 4,
    question:
      "You need to aggregate and store multiple JSON files that contain records for sales transactions. The solution must minimize the development effort. Which storage solution should you implement?",
    options: [
      { id: 0, text: "Azure Cosmos DB" },
      { id: 1, text: "Azure Files" },
      { id: 2, text: "Azure Blob storage" },
      { id: 3, text: "Azure SQL Database" },
    ],
    answer: 0,
    explanation:
      "Azure Cosmos DB has a SQL API that is optimized to store and process (transform) JSON files. The SQL API allows you to query the documents by using SQL-like language. There is no additional learning curve here to complete the task. Azure Files is used as storage for any type of file. There are no built-in methods to query the file and aggregate data. Blob storage allows you to store any type of data. You must use Azure Synapse Analytics or Azure Databricks to be able to query and aggregate the data. Azure SQL Database is a relational database that keeps data in tables. You must create a process that queries the JSON files and stores them in a relational format.",
    type: "single",
  },
  {
    id: 5,
    question: "Which is the best type of database to use for an organizational chart?",
    options: [
      { id: 0, text: "Graph Database" },
      { id: 1, text: "Document Database" },
      { id: 2, text: "Relational Database" },
      { id: 3, text: "Table storage" },
    ],
    answer: 0,
    explanation:
      "Graph databases are the best option for hierarchical data. Azure SQL Database is the best option for create, read, update, and delete (CRUD) operations and uses the least amount of storage space, but our solution does not require a database management system (DBMS). Document database is best for unstructured data. Table storage is not suited for files.",
    type: "single",
  },
  {
    id: 6,
    question:
      "Which Azure Cosmos DB API allows you to implement a non-relational database and model nodes that have relationships between them?",
    options: [
      { id: 0, text: "Apache Gremlin" },
      { id: 1, text: "NoSQL" },
      { id: 2, text: "MongoDB" },
      { id: 3, text: "Cassandra" },
    ],
    answer: 0,
    explanation:
      "Azure Cosmos DB for Apache Gremlin allows you to implement a non-relational database to model nodes and the relationships between them.",
    type: "single",
  },
  {
    id: 7,
    question:
      "Which two attributes are characteristics of a transactional data workload? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Highly normalized" },
      { id: 1, text: "Optimized for create, read, update, and delete (CRUD) operations" },
      { id: 2, text: "Highly denormalized" },
      { id: 3, text: "Optimized for read-heavy analytics" },
    ],
    answers: [0, 1],
    explanation: "Transactional databases are highly normalized and are optimized for CRUD operations.",
    type: "multiple",
  },
  {
    id: 8,
    question:
      "Which type of data workload is optimized for read operations and stores large amounts of aggregated data?",
    options: [
      { id: 0, text: "Analytical" },
      { id: 1, text: "Transactional" },
      { id: 2, text: "Graph" },
      { id: 3, text: "Time series" },
    ],
    answer: 0,
    explanation:
      "Analytical databases are highly denormalized to store large amounts of aggregated data and are optimized for reads. Time series workloads do not store large amounts of aggregated data. Graph workloads store hierarchical data. Transactional workloads are optimized for create, read, update, and delete (CRUD) operations.",
    type: "single",
  },
  {
    id: 9,
    question:
      "Which type of data workload is optimized for updates and relies on relationships between entities to correlate data?",
    options: [
      { id: 0, text: "Transactional" },
      { id: 1, text: "Analytical" },
      { id: 2, text: "Graph" },
      { id: 3, text: "Time series" },
    ],
    answer: 0,
    explanation:
      "Transactional workloads are optimized for create, read, update, and delete (CRUD) operations. Analytical databases are highly denormalized to store large amounts of aggregated data and are optimized for reads. Time series workloads do not store large amounts of aggregated data. Graph workloads store hierarchical data.",
    type: "single",
  },
  {
    id: 10,
    question:
      "What are three properties of analytical data workloads? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Read operations are optimized." },
      { id: 1, text: "They calculate business metrics over time." },
      { id: 2, text: "They operate on historical data." },
      { id: 3, text: "Write operations are optimized." },
      { id: 4, text: "Operates on current transactional data only." },
    ],
    answers: [0, 1, 2],
    explanation:
      "Analytical data workloads operate on historical data, are optimized for read operations, and calculate business metrics over time. Read and write operations are optimized for transactional data workloads.",
    type: "multiple",
  },
  {
    id: 11,
    question:
      "Which two types of applications are used in transactional systems? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Line-of-business (LOB) applications" },
      { id: 1, text: "Live applications" },
      { id: 2, text: "Batch processing applications" },
      { id: 3, text: "Data warehousing applications" },
    ],
    answers: [0, 1],
    explanation:
      "Live applications are used in transactional data processing systems. LOB applications are a type of live application that processes business data.",
    type: "multiple",
  },
  {
    id: 12,
    question:
      "Which job role is responsible for troubleshooting index performance, provisioning access to databases, and backing up databases?",
    options: [
      { id: 0, text: "Database administrator" },
      { id: 1, text: "Database engineer" },
      { id: 2, text: "Database analyst" },
      { id: 3, text: "Database user" },
    ],
    answer: 0,
    explanation:
      "Database administrators maintain existing databases. Database engineers create databases. Database analysts use data from a database to make business decisions. Database users use a database.",
    type: "single",
  },
  {
    id: 13,
    question:
      "Which job role is responsible for managing the security of the data in a database, implementing backup and recovery plans, and monitoring the performance of database solutions?",
    options: [
      { id: 0, text: "Database administrator" },
      { id: 1, text: "Data engineer" },
      { id: 2, text: "Data analyst" },
      { id: 3, text: "Database user" },
    ],
    answer: 0,
    explanation:
      "A database administrator manages data security, implementing backup and recovery plans and monitoring the performance of database solutions. A data engineer manages data privacy, monitoring data stores and data pipelines. A data analyst is responsible for building data models, cleaning and transforming data, and finding hidden data patterns. Database users use a database.",
    type: "single",
  },
  {
    id: 14,
    question:
      "Which job role is responsible for managing data privacy, monitoring data stores, and monitoring data pipelines?",
    options: [
      { id: 0, text: "Data engineer" },
      { id: 1, text: "Data analyst" },
      { id: 2, text: "Database administrator" },
      { id: 3, text: "Database user" },
    ],
    answer: 0,
    explanation:
      "A data engineer manages data privacy, monitoring data stores and data pipelines. A data analyst is responsible for building data models, cleaning and transforming data, and finding hidden data patterns. A database administrator manages data security, implementing backup and recovery plans and monitoring the performance of database solutions. Database users use a database.",
    type: "single",
  },
  {
    id: 15,
    question:
      "Which two keys are needed to create a one-to-many relationship between two tables in a relational database? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "A foreign key" },
      { id: 1, text: "A primary key" },
      { id: 2, text: "An index key" },
      { id: 3, text: "A unique key" },
    ],
    answers: [0, 1],
    explanation:
      "A primary key and a foreign key are needed for a one-to-many relationship. You need a primary key that must be unique but is not just a unique key. Index keys are used for searches.",
    type: "multiple",
  },
  {
    id: 16,
    question: "In a relational database, on which type of objects should you configure a datatype?",
    options: [
      { id: 0, text: "Columns" },
      { id: 1, text: "Tables" },
      { id: 2, text: "Rows" },
      { id: 3, text: "Schemas" },
    ],
    answer: 0,
    explanation:
      "Datatypes are applied to columns to enforce the type of data that can be stored. For example, you can apply an integer datatype to a column that must contain only whole numbers, such as a column for quantity.",
    type: "single",
  },
  {
    id: 17,
    question:
      "Which SQL operation is used to combine the content of two tables based on a shared column?",
    options: [
      { id: 0, text: "JOIN" },
      { id: 1, text: "UNION" },
      { id: 2, text: "INTERSECT" },
      { id: 3, text: "HAVING" },
    ],
    answer: 0,
    explanation:
      "JOIN is used to combine data from two tables based on a shared key. HAVING is used to filter content from a GROUP BY command. UNION displays the content of two sets of columns from two tables but is not based on a shared key. INTERSECT shows only values that exist in both tables.",
    type: "single",
  },
  {
    id: 18,
    question:
      "What should you create to improve the performance of a query accessing a table that contains millions of rows?",
    options: [
      { id: 0, text: "An index" },
      { id: 1, text: "A view" },
      { id: 2, text: "A stored procedure" },
      { id: 3, text: "A trigger" },
    ],
    answer: 0,
    explanation:
      "Creating an index allows you to search for data in a table more efficiently. A view is a virtual table based on the results of a SELECT query. It allows you to view specific rows in one or more tables. A stored procedure defines SQL statements that can be run on command.",
    type: "single",
  },
  {
    id: 19,
    question:
      "Which three statements accurately describe the properties of a table in a relational database? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "A table can have a primary key built on multiple columns." },
      { id: 1, text: "Each column must have a datatype." },
      { id: 2, text: "Each row in a table has the same number of columns." },
      { id: 3, text: "All columns must contain values." },
      { id: 4, text: "A table must have at least one foreign key." },
    ],
    answers: [0, 1, 2],
    explanation:
      "Each row in a table in a relational database has the same number of columns, can have a primary key built on multiple columns, and must have a data type. Tables in relational databases do not need all the columns to contain values or require that there be only one foreign key.",
    type: "multiple",
  },
  {
    id: 20,
    question:
      "You need to recommend a solution that encapsulates business logic to rename products and add new entries to tables. What should you include in the recommendation?",
    options: [
      { id: 0, text: "A stored procedure" },
      { id: 1, text: "An inline function" },
      { id: 2, text: "A view" },
      { id: 3, text: "A table-valued function" },
    ],
    answer: 0,
    explanation:
      "A stored procedure can encapsulate any type of business logic that can be reused in the application. A stored procedure can modify existing data as well as add new entries to tables. An inline function, a view, and a table-valued function cannot be used to complete the task because they cannot modify or create objects; they can only be used to query a database.",
    type: "single",
  },
  {
    id: 21,
    question:
      "Which service is managed and serverless, avoids the use of Windows Server licenses, and allows for each workload to have its own instance of the service being used?",
    options: [
      { id: 0, text: "Azure SQL Database" },
      { id: 1, text: "Azure SQL Managed Instance" },
      { id: 2, text: "SQL Server on Azure Virtual Machines" },
      { id: 3, text: "Azure Synapse Analytics" },
    ],
    answer: 0,
    explanation:
      "Azure SQL Database is a serverless platform as a service (PaaS) SQL instance. SQL Managed Instance is a PaaS service, but databases are maintained in the same SQL Managed Instance cluster. SQL Server on Azure Virtual Machines running Windows or Linux are not serverless options.",
    type: "single",
  },
  {
    id: 22,
    question:
      "Which Azure Data Service is fully managed, has the broadest compatibility with SQL Server 2016 features?",
    options: [
      { id: 0, text: "Azure SQL Managed Instance" },
      { id: 1, text: "Azure SQL Database" },
      { id: 2, text: "SQL Server on Azure Virtual Machines" },
      { id: 3, text: "Azure Database for MySQL" },
    ],
    answer: 0,
    explanation:
      "Azure SQL Managed Instance is a platform as a service (PaaS) service that is compatible with SQL Server 2016. Azure SQL does not support as many SQL features as SQL Managed Instance. SQL Server on Azure Virtual Machines running Windows and Linux are not managed.",
    type: "single",
  },
  {
    id: 23,
    question:
      "Which data service provides a fully managed relational database with close to 100 percent feature parity with Microsoft SQL Server?",
    options: [
      { id: 0, text: "Azure SQL Managed Instance" },
      { id: 1, text: "SQL Server on Azure Virtual Machines" },
      { id: 2, text: "Azure SQL Database" },
      { id: 3, text: "Azure Synapse Analytics" },
    ],
    answer: 0,
    explanation:
      "SQL Managed Instance is fully managed. Azure SQL Database does not provide many SQL features. Azure virtual machines are not fully managed. Azure Synapse Analytics is fully managed but is not a relational database such as SQL.",
    type: "single",
  },
  {
    id: 24,
    question: "Which data service allows you to use every feature of Microsoft SQL Server in the cloud?",
    options: [
      { id: 0, text: "SQL Server on an Azure Virtual Machines running Windows" },
      { id: 1, text: "Azure SQL Managed Instance" },
      { id: 2, text: "Azure SQL Database" },
      { id: 3, text: "SQL Server on an Azure Virtual Machines running Linux" },
    ],
    answer: 0,
    explanation:
      "SQL Server on an Azure Virtual Machines running Windows is the only option that supports all the SQL Server features in the cloud. Azure SQL Database, SQL Managed Instance, and SQL Server on an Azure Virtual Machines running Linux do not support all the SQL Server features.",
    type: "single",
  },
  {
    id: 25,
    question: "Which data service allows you to create a single database that can scale up and down without downtime?",
    options: [
      { id: 0, text: "Azure SQL Database" },
      { id: 1, text: "SQL Server on Azure Virtual Machines" },
      { id: 2, text: "Azure SQL Managed Instance" },
      { id: 3, text: "Azure Cosmos DB" },
    ],
    answer: 0,
    explanation:
      "Azure SQL Database allows you to provision a single database on a dedicated server and has on-demand scalability. SQL Managed Instance can support multiple databases, and SQL Server on Azure Virtual Machines is installed on a virtual machine, where each instance can support multiple databases.",
    type: "single",
  },
  {
    id: 26,
    question:
      "Which data service allows you to control the amount of RAM, change the I/O subsystem configuration, and add or remove CPUs?",
    options: [
      { id: 0, text: "SQL Server on Azure Virtual Machines" },
      { id: 1, text: "Azure SQL Managed Instance" },
      { id: 2, text: "Azure SQL Database" },
      { id: 3, text: "Azure Synapse Analytics" },
    ],
    answer: 0,
    explanation:
      "SQL Server on Azure Virtual Machines allows you the control to manage the system. Azure SQL Database and SQL Managed Instance are fully automated in terms of updates, backups, and recovery.",
    type: "single",
  },
  {
    id: 27,
    question: "Which type of Azure Storage is used for VHDs and is optimized for random read and write operations?",
    options: [
      { id: 0, text: "Page blob" },
      { id: 1, text: "Append blob" },
      { id: 2, text: "Block blob" },
      { id: 3, text: "Azure Files" },
    ],
    answer: 0,
    explanation:
      "Page blobs are optimized for random access and used for VHDs. Append blobs cannot be updated. Block blobs are not used for VHDs. Azure Files is not used as VHDs.",
    type: "single",
  },
  {
    id: 28,
    question:
      "Which type of Azure Storage is used to store large amounts of files to be shared with virtual machines by using SMB?",
    options: [
      { id: 0, text: "Azure Files" },
      { id: 1, text: "Azure Data Lake Storage Gen2" },
      { id: 2, text: "Page blobs" },
      { id: 3, text: "Table storage" },
    ],
    answer: 0,
    explanation:
      "Azure Files is used to share files by using NFS and SMB. Data Lake Storage Gen2 is used for storing huge amounts of data to be processed, not to be shared among virtual machines. Page blobs are used for VHDs. Table storage is used for two dimensional tables.",
    type: "single",
  },
  {
    id: 29,
    question:
      "Which Azure Blob storage access tier should you use for data that will be used once per year and can have an access time that takes more than an hour?",
    options: [
      { id: 0, text: "Archive" },
      { id: 1, text: "Hot" },
      { id: 2, text: "Cool" },
      { id: 3, text: "Premium" },
    ],
    answer: 0,
    explanation:
      "The Archive access tier is intended for data that must be retained but not frequently accessed. It can take more than one hour for this data to be available when accessed.",
    type: "single",
  },
  {
    id: 30,
    question:
      "Which two storage solutions can be mounted in Azure Synapse Analytics and used to process large volumes of data? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Azure Blob storage" },
      { id: 1, text: "Azure Data Lake Storage" },
      { id: 2, text: "Azure Table storage" },
      { id: 3, text: "Azure Files" },
      { id: 4, text: "Azure Queues" },
    ],
    answers: [0, 1],
    explanation:
      "Blob storage and Data Lake Storage can be used to store massive amounts of data and can be mounted in Azure Synapse Analytics. Azure Files and Table storage cannot be mounted in Azure Synapse Analytics.",
    type: "multiple",
  },
  {
    id: 31,
    question:
      "What are two characteristics of Azure Table storage? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Each RowKey value is unique within a table partition." },
      { id: 1, text: "Items in the same partition are stored in a RowKey order." },
      { id: 2, text: "Each RowKey value is unique within a table." },
      { id: 3, text: "Tables can have indexes to speed up queries." },
    ],
    answers: [0, 1],
    explanation:
      "RowKey is unique within a partition, not within a table. Items in the same partitions are stored in a row key order. Tables cannot have indexes to speed up queries.",
    type: "multiple",
  },
  {
    id: 32,
    question: "Which Azure Cosmos DB API should you use for data in a column-family storage structure?",
    options: [
      { id: 0, text: "Apache Cassandra" },
      { id: 1, text: "Apache Gremlin" },
      { id: 2, text: "MongoDB" },
      { id: 3, text: "Table" },
    ],
    answer: 0,
    explanation:
      "The Cassandra API is used for tabular data in a column-family storage. The Gremlin API is used for graph databases. MongoDB API stores data in the Binary JSON (BSON) format. Table is used to retrieve key-value pairs.",
    type: "single",
  },
  {
    id: 33,
    question: "Which Azure Cosmos DB API should you use for data in the BSON format?",
    options: [
      { id: 0, text: "MongoDB" },
      { id: 1, text: "Table" },
      { id: 2, text: "Cassandra" },
      { id: 3, text: "Gremlin" },
    ],
    answer: 0,
    explanation:
      "The MongoDB API stores data in the BSON format. The Table API is used for key/value pairs. The Cassandra API is used for tabular data in a column-family storage. The Gremlin API is used for graph databases.",
    type: "single",
  },
  {
    id: 34,
    question:
      "You need to process many JSON files every minute, while keeping the data from the files accessible by using native queries. Which Azure Cosmos DB API should you use?",
    options: [
      { id: 0, text: "NoSQL" },
      { id: 1, text: "Cassandra" },
      { id: 2, text: "Table" },
      { id: 3, text: "Gremlin" },
    ],
    answer: 0,
    explanation:
      "SQL (NoSQL) is the native API in Cosmos DB. It manages data in the JSON format. The Cassandra API uses a column-family storage structure. The Table API is used to work with data in key/value tables. The Gremlin API is used with data in a graph structure.",
    type: "single",
  },
  {
    id: 35,
    question: "Which Azure Cosmos DB API is queried by using a syntax based on SQL?",
    options: [
      { id: 0, text: "Apache Cassandra" },
      { id: 1, text: "MongoDB" },
      { id: 2, text: "Gremlin" },
      { id: 3, text: "Table" },
    ],
    answer: 0,
    explanation:
      "The Cassandra API is queried by using SQL. The MongoDB API is queried by using MongoDB Query Language (MQL). The Gremlin API is queried by using Graph. The Table API is queried by using OData and LINQ queries.",
    type: "single",
  },
  {
    id: 36,
    question: "Which Azure Cosmos DB API allows you to work with vertices and edges?",
    options: [
      { id: 0, text: "Apache Gremlin" },
      { id: 1, text: "NoSQL" },
      { id: 2, text: "MongoDB" },
      { id: 3, text: "Cassandra" },
    ],
    answer: 0,
    explanation:
      "Gremlin is used for data in a graph. Entities are defined as vertices that form nodes. Nodes are connected by edges that represent relationships.",
    type: "single",
  },
  {
    id: 37,
    question: "What should you use to create and run data ingestion pipelines?",
    options: [
      { id: 0, text: "Azure Data Factory" },
      { id: 1, text: "Azure Databricks" },
      { id: 2, text: "Azure HDInsight" },
      { id: 3, text: "Azure Synapse Analytics" },
    ],
    answer: 0,
    explanation:
      "Data Factory is used to run ETL pipelines. Databricks is used for processing large amounts of data, which is supported by multiple cloud providers. HDInsight is used to process large amounts of data.",
    type: "single",
  },
  {
    id: 38,
    question: "What should you use to process large amounts of data by using Apache Hadoop?",
    options: [
      { id: 0, text: "Azure HDInsight" },
      { id: 1, text: "Azure Databricks" },
      { id: 2, text: "Azure Data Factory" },
      { id: 3, text: "Azure Synapse Analytics" },
    ],
    answer: 0,
    explanation:
      "HDInsight is used to process large amounts of data by using Hadoop. Databricks is used for processing large amounts of data, which is supported by multiple cloud providers. Data Factory is used to run ETL pipelines. Azure Synapse Analytics is an Azure native service built on Apache Spark.",
    type: "single",
  },
  {
    id: 39,
    question: "Which service is built on Apache Spark and is compatible with other cloud providers?",
    options: [
      { id: 0, text: "Azure Databricks" },
      { id: 1, text: "Azure Data Factory" },
      { id: 2, text: "Azure Synapse Analytics" },
      { id: 3, text: "Azure HDInsight" },
    ],
    answer: 0,
    explanation:
      "Databricks is used for processing large amounts of data, which is supported by multiple cloud providers. Data Factory is used to run ETL pipelines. Azure Synapse Analytics is an Azure native service built on Apache Spark. HDInsight is used to process large amounts of data by using Apache Hadoop.",
    type: "single",
  },
  {
    id: 40,
    question: "Which native Azure service can you use to process data by running Apache Spark jobs?",
    options: [
      { id: 0, text: "Azure Synapse Analytics" },
      { id: 1, text: "Azure Data Lake Storage" },
      { id: 2, text: "Azure Cosmos DB" },
      { id: 3, text: "Azure HDInsight" },
    ],
    answer: 0,
    explanation:
      "Azure Synapse Analytics is an Azure native service built on Spark. Azure Data Lake Storage is used to store data. Azure Cosmos DB does not use a Spark platform.",
    type: "single",
  },
  {
    id: 41,
    question:
      "Which two services allow you to pre-process a large volume of data by using Scala? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "A serverless Apache Spark pool in Azure Synapse Analytics" },
      { id: 1, text: "Azure Databricks" },
      { id: 2, text: "Azure Data Factory" },
      { id: 3, text: "Azure HDInsight" },
    ],
    answers: [0, 1],
    explanation:
      "Databricks and the Spark pool in Azure Synapse Analytics run data processing for large amounts of data by using Scala.",
    type: "multiple",
  },
  {
    id: 42,
    question: "What is a characteristic of stream processing?",
    options: [
      { id: 0, text: "Latency is measured in seconds or milliseconds." },
      { id: 1, text: "It processes large amounts of data at a time." },
      { id: 2, text: "It is used for complex analysis." },
      { id: 3, text: "Latency is measured in minutes or hours." },
    ],
    answer: 0,
    explanation:
      "Stream processing is fast. It processes data as it arrives. Stream processing executes simple analytics or simply writes data to a sink. Stream processing handles small chunks of data.",
    type: "single",
  },
  {
    id: 43,
    question: "What is a characteristic of batch processing?",
    options: [
      { id: 0, text: "Complex analysis can be performed." },
      { id: 1, text: "It processes data as it arrives." },
      { id: 2, text: "Latency is measured in milliseconds." },
      { id: 3, text: "It handles small chunks of data." },
    ],
    answer: 0,
    explanation:
      "Batch processing is used to execute complex analysis. Batch processing handles a large amount of data at a time. Batch processing is usually measured in minutes and hours.",
    type: "single",
  },
  {
    id: 44,
    question:
      "Which two services can be used as a source for stream processing? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Azure Event Hubs" },
      { id: 1, text: "Azure IoT Hub" },
      { id: 2, text: "Azure Databricks" },
      { id: 3, text: "Azure SQL Database" },
    ],
    answers: [0, 1],
    explanation:
      "Azure IoT Hub and Azure Event Hubs can be used as sources for stream processing. Azure Databricks is used for processing large amounts of data; Azure SQL Database is used to store relational data.",
    type: "multiple",
  },
  {
    id: 45,
    question: "In a stream processing architecture, what can you use to persist the processed results as files?",
    options: [
      { id: 0, text: "Azure Data Lake Storage Gen2" },
      { id: 1, text: "Azure Synapse Analytics" },
      { id: 2, text: "Azure Event Hubs" },
      { id: 3, text: "Azure Databricks" },
    ],
    answer: 0,
    explanation:
      "Data Lake Storage Gen2 can be used to store files. Azure Synapse Analytics and Databricks can be used to persist the data in a database for further querying and analysis. Event Hubs is a data ingestion service.",
    type: "single",
  },
  {
    id: 46,
    question:
      "Which three services can be used to ingest data for stream processing? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Azure Event Hubs" },
      { id: 1, text: "Azure IoT Hub" },
      { id: 2, text: "Azure Data Lake Storage" },
      { id: 3, text: "Azure Functions" },
      { id: 4, text: "Azure SQL Database" },
    ],
    answers: [0, 1, 2],
    explanation:
      "Data Lake Storage, Event Hubs, and IoT Hub are sources commonly used to ingest data for stream processing. Azure SQL Database and Azure Function are outputs.",
    type: "multiple",
  },
  {
    id: 47,
    question: "Which service allows you to aggregate data over a specific time window before the data is written to a data lake?",
    options: [
      { id: 0, text: "Azure Stream Analytics" },
      { id: 1, text: "Azure Event Hubs" },
      { id: 2, text: "Azure SQL Database" },
      { id: 3, text: "Azure Data Factory" },
    ],
    answer: 0,
    explanation:
      "Stream Analytics allows you to aggregate data from a specific period before it is written to a data lake. Event Hubs is used as a source or a sink for stream processing. Azure SQL Database is used to persist processed results in a database table for querying and analysis.",
    type: "single",
  },
  {
    id: 48,
    question: "What should you use to define an analytical model for Microsoft Power BI?",
    options: [
      { id: 0, text: "Power BI Desktop" },
      { id: 1, text: "Power BI Phone App" },
      { id: 2, text: "Power BI Service" },
      { id: 3, text: "Azure Data Factory" },
    ],
    answer: 0,
    explanation:
      "Power BI Desktop is used to define analytical models. Phone App is used to view Power BI reports. Power BI Service is used to serve data. Data Factory is used to run ETL jobs.",
    type: "single",
  },
  {
    id: 49,
    question: "Which visual in Microsoft Power BI allows you to view trends, such as changes in sales over time?",
    options: [
      { id: 0, text: "A line chart" },
      { id: 1, text: "A scatter plot" },
      { id: 2, text: "A pie chart" },
      { id: 3, text: "A table" },
    ],
    answer: 0,
    explanation:
      "Line charts are used to compare categorized values, often to show trends over time. Scatter plots are used to compare two numeric measures and identify a relationship or correlation between them. Pie charts are used to show categories as a proportion of a total. Tables are used to display multiple related values.",
    type: "single",
  },
  {
    id: 50,
    question: "You need to share a report that you created in Microsoft Power BI Desktop with other users. What should you do first?",
    options: [
      { id: 0, text: "Publish the report to the Power BI service." },
      { id: 1, text: "Export the report as a PBIX file and email it." },
      { id: 2, text: "Save the report to OneDrive." },
      { id: 3, text: "Take a screenshot of the report." },
    ],
    answer: 0,
    explanation:
      "To share data models and reports created in Power BI Desktop, they are first published to the Power BI service.",
    type: "single",
  },
  // --- START OF NEW QUESTIONS ---
  {
    id: 51,
    question:
      "Which type of data structure allows you to store data in a two-column format without requiring a complex database management system?",
    options: [
      { id: 0, text: "Key/value store" },
      { id: 1, text: "Relational database" },
      { id: 2, text: "Document database" },
      { id: 3, text: "Graph database" },
    ],
    answer: 0,
    explanation:
      "A key/value store is used for simple lookups based on a single key to obtain a single value. A relational database is the best option for create, read, update, and delete (CRUD) operations and uses the least amount of storage space, but our solution does not require a database management system (DBMS). A document database used unstructured data such as JSON, and optimized for retrieval, not CRUD operations. A graph database is used to store hierarchical data, such as organizational charts that have nodes and edges.",
    type: "single",
  },
  {
    id: 52,
    question:
      "You have data that describes products and is stored in JSON documents. The product structure changes over time as new attributes are added. Which type of data do you have?",
    options: [
      { id: 0, text: "Semi-structured" },
      { id: 1, text: "Unstructured" },
      { id: 2, text: "Structured" },
      { id: 3, text: "Relational" },
    ],
    answer: 0,
    explanation: "Semi-structured data has some structure but allows for variations between entity instances. A common format for semi-structured data is JSON.",
    type: "single",
  },
  {
    id: 53,
    question: "Which two types of file store data in columnar format? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Parquet" },
      { id: 1, text: "ORC" },
      { id: 2, text: "Avro" },
      { id: 3, text: "CSV" },
      { id: 4, text: "JSON" },
    ],
    answers: [0, 1],
    explanation: "ORC and Parquet are columnar data formats. Avro is row-based, and CSV is used for delimited data.",
    type: "multiple",
  },
  {
    id: 54,
    question: "Which feature of transactional data processing guarantees that concurrent processes cannot see the data in an inconsistent state?",
    options: [
      { id: 0, text: "Isolation" },
      { id: 1, text: "Consistency" },
      { id: 2, text: "Atomicity" },
      { id: 3, text: "Durability" },
    ],
    answer: 0,
    explanation: "Isolation in transactional data processing ensures that concurrent transactions cannot interfere with one another and must result in a consistent database state.",
    type: "single",
  },
  {
    id: 55,
    question: "Which job role is responsible for creating reports from a database and using OLAP cubes?",
    options: [
      { id: 0, text: "Database analyst" },
      { id: 1, text: "Database user" },
      { id: 2, text: "Database administrator" },
      { id: 3, text: "Database engineer" },
    ],
    answer: 0,
    explanation: "Database analysts use data from a database to make business decisions. Database users use a database. Database administrators maintain existing databases. Database engineers create databases.",
    type: "single",
  },
  {
    id: 56,
    question: "Which job role is responsible for building data models and finding hidden data patterns?",
    options: [
      { id: 0, text: "Data analyst" },
      { id: 1, text: "Data engineer" },
      { id: 2, text: "Database administrator" },
      { id: 3, text: "Database user" },
    ],
    answer: 0,
    explanation: "A data analyst is responsible for building data models, cleaning and transforming data, and finding hidden data patterns. A data engineer manages data privacy, monitoring data stores and data pipelines. A database administrator manages data security, implementing backup and recovery plan, and monitoring the performance of database solutions. Database users use a database.",
    type: "single",
  },
  {
    id: 57,
    question: "What are two advantages of using normalization over not using normalization in a relational database? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Optimizes for updates" },
      { id: 1, text: "Uses less storage space" },
      { id: 2, text: "Optimizes for complex reads" },
      { id: 3, text: "Improves query speed for aggregations" },
    ],
    answers: [0, 1],
    explanation: "Normalization uses the least possible amount of storage. Normalization optimizes for updates, inserts, and deletes. Normalization does not optimize for complex reads and does not provide a mechanism for unstructured data.",
    type: "multiple",
  },
  {
    id: 58,
    question: "Which three open-source databases are available as platform as a service (PaaS) in Azure? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "MariaDB" },
      { id: 1, text: "MySQL" },
      { id: 2, text: "PostgreSQL" },
      { id: 3, text: "CouchDB" },
      { id: 4, text: "Microsoft SQL Server" },
    ],
    answers: [0, 1, 2],
    explanation: "Azure Database for MariaDB is a PaaS service. Azure Database for MySQL is a PaaS service. Azure Database for PostgreSQL is a PaaS service. You can use CockroachDB and CouchDB on a virtual machine.",
    type: "multiple",
  },
  {
    id: 59,
    question: "Which open-source database has built-in support for temporal data?",
    options: [
      { id: 0, text: "MariaDB" },
      { id: 1, text: "PostgreSQL" },
      { id: 2, text: "MySQL" },
      { id: 3, text: "MongoDB" },
    ],
    answer: 0,
    explanation: "MariaDB has built-in support for temporal data. It enables applications to query data as the data appeared in previous points in time.",
    type: "single",
  },
  {
    id: 60,
    question: "Which SQL engine is optimized for IoT scenarios?",
    options: [
      { id: 0, text: "Azure SQL Edge" },
      { id: 1, text: "Azure SQL Database" },
      { id: 2, text: "SQL Server on Azure Virtual Machines" },
      { id: 3, text: "Azure SQL Managed Instance" },
    ],
    answer: 0,
    explanation: "SQL Edge is optimized for IoT scenarios that must work with streaming time series data. SQL Server on Azure Virtual Machines is best used when you want to retain control over the server and database configuration. SQL Managed Instance is ideal for cloud migrations where you need minimal change to existing apps. Azure SQL Database is best used for new cloud solutions.",
    type: "single",
  },
  {
    id: 61,
    question: "Which type of Azure Storage is the least expensive option that allows you to store new or modified image files?",
    options: [
      { id: 0, text: "Block blobs in the Archive tier" },
      { id: 1, text: "Block blobs in the Cool tier" },
      { id: 2, text: "Append blobs" },
      { id: 3, text: "Page blobs" },
    ],
    answer: 0,
    explanation: "Block blobs are used for files and the Archive tier is the least expensive option. The Cool tier is not the least expensive option. Append blobs cannot be updated.",
    type: "single",
  },
  {
    id: 62,
    question: "Which type of Azure Storage is used to store large amounts of data that must be processed by services such as Azure Databricks, Azure Synapse Analytics, and Azure HDInsight?",
    options: [
      { id: 0, text: "Azure Data Lake Storage Gen2" },
      { id: 1, text: "Page blobs" },
      { id: 2, text: "Table storage" },
      { id: 3, text: "Azure Files" },
    ],
    answer: 0,
    explanation: "Data Lake Storage Gen2 is used for storing huge amounts of data to be processed by services such as Databricks, Azure Synapse Analytics, and HDInsight. Page blobs are used for VHDs. Table storage is used for two dimensional tables. Azure Files is not optimized for large amounts of data to be processed by services such as HDInsight.",
    type: "single",
  },
  {
    id: 63,
    question: "Which storage solution should you use to store unstructured documents, graph databases, and key/value pairs?",
    options: [
      { id: 0, text: "Azure Cosmos DB" },
      { id: 1, text: "Azure Files" },
      { id: 2, text: "Table storage" },
      { id: 3, text: "Azure SQL Database" },
    ],
    answer: 0,
    explanation: "Azure Cosmos DB can be used to store unstructured documents, graph databases, and key/value pairs. Azure Files is used to share files by using SMB and NFS. Table storage only stores key/value pairs. Azure SQL is used to store relational databases.",
    type: "single",
  },
  {
    id: 64,
    question: "Which Azure Cosmos DB API should you use for data in key/value tables?",
    options: [
      { id: 0, text: "Table" },
      { id: 1, text: "Cassandra" },
      { id: 2, text: "Gremlin" },
      { id: 3, text: "MongoDB" },
    ],
    answer: 0,
    explanation: "The Table API is used for key/value pairs. The Cassandra API is used for tabular data in a column-family storage. The Gremlin API is used for graph databases. The MongoDB API stores data in the BSON format.",
    type: "single",
  },
  {
    id: 65,
    question: "Which storage solution allows you to aggregate data stored in JSON files for use in analytical reports without additional development effort?",
    options: [
      { id: 0, text: "Azure Cosmos DB" },
      { id: 1, text: "Azure SQL Database" },
      { id: 2, text: "Azure Blob storage" },
      { id: 3, text: "Azure Data Lake Storage" },
    ],
    answer: 0,
    explanation: "Azure Cosmos DB allows you to aggregate data in analytical reports without additional development. Azure SQL Database does not store data in JSON files. Blob storage and Data Lake Storage do not allow you to aggregate data for analytical reports without additional development effort.",
    type: "single",
  },
  {
    id: 66,
    question: "Which two services allow you to create a pipeline to process data in response to an event? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Azure Data Factory" },
      { id: 1, text: "Azure Synapse Analytics" },
      { id: 2, text: "Azure Databricks" },
      { id: 3, text: "Azure HDInsight" },
    ],
    answers: [0, 1],
    explanation: "Azure Synapse Analytics and Data Factory both allow you to create a pipeline in response to an event. Databricks and HDInsight run data processing tasks.",
    type: "multiple",
  },
  {
    id: 67,
    question: "What should you create first for an integration process that copies data from Microsoft Excel files to Parquet files by using Azure Data Factory?",
    options: [
      { id: 0, text: "A linked service" },
      { id: 1, text: "A pipeline" },
      { id: 2, text: "A dataset" },
      { id: 3, text: "An activity" },
    ],
    answer: 0,
    explanation: "A linked service must be created first. Pipelines use existing linked services to load and process data. Datasets are the input and output, and activities can be defined as the data flow.",
    type: "single",
  },
  {
    id: 68,
    question: "Which service can you use to perpetually retrieve data from a Kafka queue, process the data, and write the data to Azure Data Lake?",
    options: [
      { id: 0, text: "Azure Stream Analytics" },
      { id: 1, text: "Azure Synapse Analytics" },
      { id: 2, text: "Azure Cosmos DB" },
      { id: 3, text: "Azure Data Factory" },
    ],
    answer: 0,
    explanation: "Stream Analytics can handle stream processing from Kafka to Data Lake. Azure Synapse Analytics does not process streaming data. Azure Cosmos DB does not handle data streaming. Data Factory does not handle streams.",
    type: "single",
  },
  {
    id: 69,
    question: "Which service allows you to perform on-demand analysis of large volumes of data from text logs, websites and IoT devices by using a common querying language for all the data sources?",
    options: [
      { id: 0, text: "Azure Data Explorer" },
      { id: 1, text: "Azure Data Lake Storage Gen2" },
      { id: 2, text: "Azure Stream Analytics" },
      { id: 3, text: "Azure Cosmos DB" },
    ],
    answer: 0,
    explanation: "Data Explorer is used for the analysis of large amounts of text log data, websites, and IoT devices and uses a common querying language. Data Lake Storage Gen2 is a data source, Azure Stream Analytics is used to define streaming jobs, apply a perpetual query, and write the results to an output. Azure Cosmos DB stores data.",
    type: "single",
  },
  {
    id: 70,
    question: "Which type of visual in Microsoft Power BI should you use to identify the correlation between two numeric measures?",
    options: [
      { id: 0, text: "Scatter plots" },
      { id: 1, text: "Pie charts" },
      { id: 2, text: "Line charts" },
      { id: 3, text: "Bar charts" },
    ],
    answer: 0,
    explanation: "Scatter plots are used to determine a relationship or correlation between two numeric values. Pie charts visually compare different values as a proportion of a total. Line charts are used to examine trends, usually over time. Bar charts are used to compare different values for discrete categories.",
    type: "single",
  },
  {
    id: 71,
    question: "Which data model element represents the entities by which you want to aggregate measures in Microsoft Power BI?",
    options: [
      { id: 0, text: "Dimensions" },
      { id: 1, text: "Fact tables" },
      { id: 2, text: "Relationships" },
      { id: 3, text: "Keys" },
    ],
    answer: 0,
    explanation: "Dimensions are used to aggregate data. Fact tables contain measures that are aggregated, not values to aggregate by. A relationship is used to tie facts to dimensions. Keys are used to establish relationships.",
    type: "single",
  },
  {
    id: 72,
    question: "Which two visuals in Microsoft Power BI allow you to visually compare numeric values for discrete categories? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "A bar chart" },
      { id: 1, text: "A column chart" },
      { id: 2, text: "A card" },
      { id: 3, text: "A matrix" },
    ],
    answers: [0, 1],
    explanation: "Bar charts and column charts allow you to compare numeric values for discrete values. A card is used to track a single number or value. A matrix makes it easier to view data across multiple dimensions.",
    type: "multiple",
  },
  {
    id: 73,
    question: "In the Power BI service, what should you create to share a single page with the most important visuals from reports?",
    options: [
      { id: 0, text: "A dashboard" },
      { id: 1, text: "A report" },
      { id: 2, text: "A workspace" },
      { id: 3, text: "A dataset" },
    ],
    answer: 0,
    explanation: "Dashboards are used to combine related reports into a single location for easier visibility into data.",
    type: "single",
  },
    // --- START OF NEW QUESTIONS ---
  {
    id: 74,
    question: "Which Azure data service allows you to store document, graph, and column-family databases?",
    options: [
        { id: 0, text: "Azure Cosmos DB" },
        { id: 1, text: "Azure SQL Database" },
        { id: 2, text: "Azure Table storage" },
        { id: 3, text: "HBase on HDInsight" },
    ],
    answer: 0,
    explanation: "Azure Cosmos DB can handle all the databases needed. Azure SQL Database cannot handle column-family databases. Table storage cannot handle any of the database types. HBase cannot handle graph databases.",
    type: "single",
  },
  {
    id: 75,
    question: "You have data stored in two tables in a database. You create a relationship between the tables. Which type of data do you have?",
    options: [
        { id: 0, text: "Structured" },
        { id: 1, text: "Unstructured" },
        { id: 2, text: "Semi-structured" },
        { id: 3, text: "Hierarchical" },
    ],
    answer: 0,
    explanation: "Data stored in two tables in a database with a relationship between the tables is an example of structured data.",
    type: "single",
  },
  {
    id: 76,
    question: "Which type of database should you use to store sequential data in the fastest way possible?",
    options: [
        { id: 0, text: "Time series database" },
        { id: 1, text: "Table storage" },
        { id: 2, text: "Graph database" },
        { id: 3, text: "Azure SQL Database" },
    ],
    answer: 0,
    explanation: "Time series databases are used to store sequential data. Table storage is not suited for time series. Graph databases are used to store hierarchical data, such as organizational charts that have nodes and edges. Azure SQL Database is the best option for create, read, update, and delete (CRUD) operations, uses the least amount of storage space, and is not optimized for time series.",
    type: "single",
  },
  {
    id: 77,
    question: "Which two attributes are characteristics of an analytical data workload? Each correct answer presents a complete solution.",
    options: [
        { id: 0, text: "Highly denormalized" },
        { id: 1, text: "Optimized for read operations" },
        { id: 2, text: "Highly normalized" },
        { id: 3, text: "Optimized for write operations" },
    ],
    answers: [0, 1],
    explanation: "Analytical data workloads are highly denormalized and are optimized for read operations.",
    type: "multiple",
  },
  {
    id: 78,
    question: "Which SQL clause can be used to copy all the rows from one table to a new table?",
    options: [
        { id: 0, text: "SELECT ... INTO" },
        { id: 1, text: "SELECT ... OVER" },
        { id: 2, text: "INSERT ... VALUES" },
        { id: 3, text: "SELECT ... HAVING" },
    ],
    answer: 0,
    explanation: "SELECT INTO does an insert into a table. SELECT OVER determines the partitioning and ordering of the rowset before a windowing function is applied. INSERT VALUES inserts values into a single row. SELECT HAVING filters data.",
    type: "single",
  },
  {
    id: 79,
    question: "Select the answer that correctly completes the sentence. [Answer choice] is a process to reduce duplicate data in a database and ensure data integrity.",
    options: [
        { id: 0, text: "Normalization" },
        { id: 1, text: "Refactoring" },
        { id: 2, text: "Denormalization" },
        { id: 3, text: "Indexing" },
    ],
    answer: 0,
    explanation: "Normalization is a process to reduce data duplication. This can be done by separating entities into their own tables and establishing relationships between the tables.",
    type: "single",
  },
  {
    id: 80,
    question: "Which two DML statements are used to modify the existing data in a table? Each correct answer presents a complete solution.",
    options: [
        { id: 0, text: "UPDATE" },
        { id: 1, text: "MERGE" },
        { id: 2, text: "SELECT" },
        { id: 3, text: "INSERT" },
    ],
    answers: [0, 1],
    explanation: "UPDATE and MERGE modify the existing data in a table. SELECT and INSERT do not affect the existing data in a table.",
    type: "multiple",
  },
  {
    id: 81,
    question: "In a relational database, what can you use to create a virtual table from the results of a SELECT statement?",
    options: [
        { id: 0, text: "A view" },
        { id: 1, text: "A stored procedure" },
        { id: 2, text: "An index" },
        { id: 3, text: "A relationship" },
    ],
    answer: 0,
    explanation: "A view is a virtual table based on the results of a SELECT query. A stored procedure defines SQL statements that can be run on command. An index helps you search for data in a table. A relationship is an association between two tables.",
    type: "single",
  },
  {
    id: 82,
    question: "Which type of Azure Storage is used to store key/value pairs grouped in partitions?",
    options: [
        { id: 0, text: "Azure Table storage" },
        { id: 1, text: "Azure Files" },
        { id: 2, text: "Azure Data Lake Storage Gen2" },
        { id: 3, text: "Page blobs" },
    ],
    answer: 0,
    explanation: "Table storage is used to store key/value pairs in partitions. Azure Files is used to store and share files by using SMB and NFS. Data Lake Storage Gen2 is used to store structured and unstructured data for processing. Page blobs are used for VHDs.",
    type: "single",
  },
  {
    id: 83,
    question: "You need to replace an existing on-premises SMB shared folder with a cloud solution. Which storage option should you choose?",
    options: [
        { id: 0, text: "Azure Files" },
        { id: 1, text: "Azure Blob Storage" },
        { id: 2, text: "Azure Table Storage" },
        { id: 3, text: "Azure Disk Storage" },
    ],
    answer: 0,
    explanation: "Azure Files allows you to create cloud-based network shares to make documents and other files available to multiple users.",
    type: "single",
  },
  {
    id: 84,
    question: "Which data integration service allows you to orchestrate data flow without coding?",
    options: [
        { id: 0, text: "Azure Data Factory" },
        { id: 1, text: "Azure Data Lake" },
        { id: 2, text: "Azure Databricks" },
        { id: 3, text: "Azure HDInsight" },
    ],
    answer: 0,
    explanation: "Data Factory allows you to orchestrate data flow without coding by using pipelines. Data Lake is a storage repository. Databricks and HDInsight run data processing tasks.",
    type: "single",
  },
  {
    id: 85,
    question: "You have an Azure Cosmos DB service running the SQL API. One of the operational databases has a lot of transactions. Which service allows you to perform near real-time analytics on the operational data stored in Azure Cosmos DB?",
    options: [
        { id: 0, text: "Azure Synapse Link" },
        { id: 1, text: "Azure Databricks" },
        { id: 2, text: "Azure HDInsight" },
        { id: 3, text: "Azure Data Lake Storage" },
    ],
    answer: 0,
    explanation: "Azure Synapse Link for Cosmos DB allows you to perform near real-time analytics on operational data. Databricks and HDInsight do not meet all the requirements. Data Lake Storage is a category of analytical data store.",
    type: "single",
  },
  {
    id: 86,
    question: "You are processing data by using batches and streams. What should you use to ensure that transactional consistency is enforced during the processing?",
    options: [
        { id: 0, text: "Delta Lake" },
        { id: 1, text: "Azure SQL Database" },
        { id: 2, text: "Parquet format" },
        { id: 3, text: "Azure Stream Analytics" },
    ],
    answer: 0,
    explanation: "Delta Lake is an open-source storage layer that adds support to Data Lake Storage for transactional consistency.",
    type: "single",
  },
  {
    id: 87,
    question: "Which type of visual in Microsoft Power BI should you use to display a single value, such as total sales?",
    options: [
        { id: 0, text: "Card" },
        { id: 1, text: "Table" },
        { id: 2, text: "Pie chart" },
        { id: 3, text: "Bar chart" },
    ],
    answer: 0,
    explanation: "A card shows a single value and is useful for highlighting important metrics. Tables are typically used to display multiple values. A pie chart compares categorized values as a proportion of the total. Bar charts can be used to compare numeric values for discrete categories.",
    type: "single",
  },
    // --- START OF NEW QUESTIONS ---
  {
    id: 88,
    question: "Which type of data should be sent from video cameras in a native binary format?",
    options: [
        { id: 0, text: "Unstructured" },
        { id: 1, text: "Semi-structured" },
        { id: 2, text: "Structured" },
        { id: 3, text: "Relational" },
    ],
    answer: 0,
    explanation: "Unstructured data contains data such as documents, images, audio data, video data, and binary files.",
    type: "single",
  },
  {
    id: 89,
    question: "You design an application that needs to store data based on the following requirements:\n- Store historical data from multiple data sources.\n- Load data on a scheduled basis.\n- Use a denormalized star or snowflake schema.\nWhich type of database should you use?",
    options: [
        { id: 0, text: "OLAP Database" },
        { id: 1, text: "OLTP Database" },
        { id: 2, text: "Graph Database" },
        { id: 3, text: "Table storage" },
    ],
    answer: 0,
    explanation: "OLAP databases are used for snowflake schemas with historical data. Table storage is not suited for this type of data. Graph databases are used to store hierarchical data, such as organizational charts that have nodes and edges. OLTP databases are used for create, read, update, and delete (CRUD) operations, use the least amount of storage space, and are not for historical data in a snowflake schema.",
    type: "single",
  },
  {
    id: 90,
    question: "Which job role is responsible for designing database solutions, creating databases, and developing stored procedures?",
    options: [
        { id: 0, text: "Database engineer" },
        { id: 1, text: "Database analyst" },
        { id: 2, text: "Database user" },
        { id: 3, text: "Database administrator" },
    ],
    answer: 0,
    explanation: "Database engineers create databases. Database analysts use data from a database to make business decisions. Database users use a database. Database administrators maintain existing databases.",
    type: "single",
  },
  {
    id: 91,
    question: "You have a complex query that selects data from multiple tables. Which three database objects should allow you to reuse the query definition? Each correct answer presents a complete solution.",
    options: [
        { id: 0, text: "A function" },
        { id: 1, text: "A stored procedure" },
        { id: 2, text: "A view" },
        { id: 3, text: "A temporary table" },
    ],
    answers: [0, 1, 2],
    explanation: "A view, a function, and a stored procedure allow you to reuse the query definition for a complex query that selects data from multiple tables.",
    type: "multiple",
  },
  {
    id: 92,
    question: "Which data service allows you to migrate an entire Microsoft SQL Server to the cloud without requiring that you manage the infrastructure after the migration?",
    options: [
        { id: 0, text: "Azure SQL Managed Instance" },
        { id: 1, text: "SQL Server on Azure Virtual Machines" },
        { id: 2, text: "Azure SQL Database" },
        { id: 3, text: "Azure Database Migration Service" },
    ],
    answer: 0,
    explanation: "SQL Managed Instance allows you to migrate an entire SQL server to the cloud without requiring that you manage the infrastructure after the migration. You must manage all aspects of SQL Server on Azure Virtual Machines. Azure SQL Database supports most, but not all, core database-level capabilities of SQL Server.",
    type: "single",
  },
  {
    id: 93,
    question: "Which open-source database is a hybrid relational-object database?",
    options: [
        { id: 0, text: "PostgreSQL" },
        { id: 1, text: "MariaDB" },
        { id: 2, text: "MySQL" },
        { id: 3, text: "MongoDB" },
    ],
    answer: 0,
    explanation: "PostgreSQL is a hybrid relational-object database. You can store data in relational tables, or you can store custom data types with non-relational properties.",
    type: "single",
  },
  {
    id: 94,
    question: "Which type of visual in Microsoft Power BI should you use to compare categorized values as the proportions of a total value?",
    options: [
        { id: 0, text: "Pie chart" },
        { id: 1, text: "Line chart" },
        { id: 2, text: "Bar chart" },
        { id: 3, text: "Scatter plot" },
    ],
    answer: 0,
    explanation: "Pie charts visually compare different values as a proportion of a total. Line charts are used to examine trends, usually over time. Bar charts are used to compare different values for discrete categories. Scatter plots are used to determine a relationship or correlation between two numeric values.",
    type: "single",
  },
  {
    id: 95,
    question: "Which two services can be used as a source for stream processing? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Azure Event Hubs" },
      { id: 1, text: "Azure IoT Hub" },
      { id: 2, text: "Azure Databricks" },
      { id: 3, text: "Azure SQL Database" },
    ],
    answers: [0, 1],
    explanation: "Azure IoT Hub and Azure Event Hubs can be used as sources for stream processing. Azure Databricks is used for processing large amounts of data; Azure SQL Database is used to store relational data.",
    type: "multiple",
  },
  {
    id: 96,
    question: "In a stream processing architecture, what can you use to persist the processed results as files?",
    options: [
      { id: 0, text: "Azure Data Lake Storage Gen2" },
      { id: 1, text: "Azure Synapse Analytics" },
      { id: 2, text: "Azure Event Hubs" },
      { id: 3, text: "Azure Databricks" },
    ],
    answer: 0,
    explanation: "Data Lake Storage Gen2 can be used to store files. Azure Synapse Analytics and Databricks can be used to persist the data in a database for further querying and analysis. Event Hubs is a data ingestion service.",
    type: "single",
  },
  {
    id: 97,
    question: "Which type of Azure Storage is used to store large amounts of files to be shared with virtual machines by using SMB?",
    options: [
      { id: 0, text: "Azure Files" },
      { id: 1, text: "Azure Data Lake Storage Gen2" },
      { id: 2, text: "Page blobs" },
      { id: 3, text: "Table storage" },
    ],
    answer: 0,
    explanation: "Azure Files is used to share files by using NFS and SMB. Data Lake Storage Gen2 is used for storing huge amounts of data to be processed, not to be shared among virtual machines. Page blobs are used for VHDs. Table storage is used for two dimensional tables.",
    type: "single",
  },
];
