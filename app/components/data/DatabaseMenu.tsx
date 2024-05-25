"use client";
import React, { useState, useEffect } from 'react';
import { Checkbox } from "@/components/ui/checkbox"

interface DatabaseCollections {
  [key: string]: string[];
}

const DatabaseItem = ({ dbName, collections }: { dbName: string; collections: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <span className={`db-text ${isOpen ? 'db-text-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "triangle-down" : "triangle-right"}></span>
        {dbName}
      </span>
      {isOpen && (
        <ul>
          {collections.map((collection) => (
            <li key={collection} className="collection-text">{collection}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

const DatabaseMenu = () => {
  const [databases, setDatabases] = useState<DatabaseCollections>({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/databases')
      .then(response => response.json())
      .then(data => {
        const dbNames = data.databases;
        const dbCollections = {};
        dbNames.forEach(dbName => {
          fetch(`http://127.0.0.1:8000/collections/${dbName}`)
            .then(response => response.json())
            .then(data => {
              dbCollections[dbName] = data.collections || [];
              if (Object.keys(dbCollections).length === dbNames.length) {
                setDatabases(dbCollections);
              }
            })
            .catch(error => {
              console.error('Error fetching collections:', error);
              dbCollections[dbName] = [];
            });
        });
      })
      .catch(error => {
        console.error('Error fetching databases:', error);
        setDatabases({});
      });
  }, []);

  return (
    <ul>
      {Object.entries(databases).map(([dbName, collections]) => (
        <DatabaseItem key={dbName} dbName={dbName} collections={collections} />
      ))}
    </ul>
  );
};

export default DatabaseMenu;