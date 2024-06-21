import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true);

    if(categoryId) { // return only specific category
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);

        })
    } else { // return all category
      client.fetch(feedQuery)
      .then((data) => {
          setPins(data);
          setLoading(false);
      });
    }
  }, [categoryId])

  if (loading) return <Spinner message='We are adding new ideas to your feed!' />

  if (!pins?.length) return <div>No pins available</div>

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed
