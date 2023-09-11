import React from 'react';
import ReactMarkdown from 'react-markdown';
import "../constants/markdown-styles.css";
import styles from '../style';

const blogContent = `
Delving into the mysteries of the deep sea has always captivated the human imagination. In this blog post, we'll uncover the incredible life forms and adaptations found in the depths of the ocean.

## The Depths Unveiled

The deep sea is a realm of wonder that remains largely unexplored. With extreme conditions, limited human exploration has been possible due to technological challenges.

## Bizarre and Adapted Creatures

The deep sea is home to a myriad of unique organisms with extraordinary adaptations. From bioluminescent jellyfish to anglerfish, these creatures have evolved to thrive in their dark environment.

## The Role in the Global Ecosystem

Deep sea ecosystems play a vital role in maintaining the health of our oceans. They contribute to the carbon cycle and hold potential for biomedical discoveries.

## Conservation and Threats

Despite their importance, deep sea ecosystems face threats from activities like deep-sea mining and climate change. Responsible conservation efforts are crucial for their survival.

## The Future of Deep Sea Exploration

Advancements in technology are enabling deeper exploration of the oceans. Ongoing research missions are uncovering more about these fascinating ecosystems.

Stay curious and engaged with ongoing research in the field of deep sea exploration.
`;

const BlogPost = ({title}) => {
  return (
    <div className="min-h-screen">
    <div className={`${styles.heading2}`}>{title}</div>
      <div className="max-w-3xl mx-auto px-4">
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
