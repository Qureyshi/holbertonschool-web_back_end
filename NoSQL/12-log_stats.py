#!/usr/bin/env python3
"""mongo db"""
from pymongo import MongoClient

def main():
    # Connect to MongoDB
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    # Total number of logs
    total_logs = collection.count_documents({})
    
    # Count logs by HTTP method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: collection.count_documents({"method": method}) for method in methods}
    
    # Count logs with method GET and path /status
    status_check = collection.count_documents({"method": "GET", "path": "/status"})

    # Print results
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{status_check} status check")

if __name__ == "__main__":
    main()

