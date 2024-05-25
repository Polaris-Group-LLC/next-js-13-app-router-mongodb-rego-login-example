"use client";
import React, { useState, useEffect } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface DatabaseCollections {
  [key: string]: string[];
}

const DatabaseItem = ({ dbName, collections }: { dbName: string; collections: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(true); // Initialize as checked
  const [collectionChecks, setCollectionChecks] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Initialize all collection checkboxes to true
    const initialChecks = collections.reduce((acc, collection) => {
      acc[collection] = true; // Ensure all are checked by default
      return acc;
    }, {});
    setCollectionChecks(initialChecks);
  }, [collections]);

  const handleCollectionCheckChange = (collection: string, isChecked: boolean) => {
    setCollectionChecks(prev => ({ ...prev, [collection]: isChecked }));
  };

  const handleDbCheckboxChange = (isChecked: boolean) => {
    setChecked(isChecked);
    // Update all collection checkboxes based on the DB checkbox state
    const updatedChecks = Object.keys(collectionChecks).reduce((acc, collection) => {
      acc[collection] = isChecked;
      return acc;
    }, {});
    setCollectionChecks(updatedChecks);
  };

  return (
    <li>
      <Checkbox.Root className="checkbox-root" checked={checked} onCheckedChange={handleDbCheckboxChange}>
        <Checkbox.Indicator className="checkbox-indicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className={`db-text ${isOpen ? 'db-text-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "triangle-down" : "triangle-right"}></span>
        {dbName}
      </span>
      {isOpen && (
        <ul>
          {collections.map((collection) => (
            <li key={collection} className="collection-text">
              <Checkbox.Root className="checkbox-root" checked={collectionChecks[collection]} onCheckedChange={(state) => handleCollectionCheckChange(collection, state)}>
                <Checkbox.Indicator className="checkbox-indicator">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              {collection}
            </li>
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