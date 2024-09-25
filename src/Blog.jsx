import { Link } from "react-router-dom";
import { useState } from 'react'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    { id: 1, title: '10 Tips for a Healthy Heart', category: 'Cardiology', date: 'May 15, 2023', excerpt: 'Learn how to keep your heart healthy with these simple lifestyle changes.' },
    { id: 2, title: 'Understanding Childhood Vaccinations', category: 'Pediatrics', date: 'May 10, 2023', excerpt: 'A comprehensive guide to childhood vaccinations and their importance.' },
    { id: 3, title: 'The Importance of Mental Health', category: 'Psychology', date: 'May 5, 2023', excerpt: 'Discover why mental health is just as important as physical health.' },
    { id: 4, title: 'Nutrition Tips for a Balanced Diet', category: 'Nutrition', date: 'April 30, 2023', excerpt: 'Simple tips to help you maintain a balanced and healthy diet.' },
    { id: 5, title: 'Common Skin Problems and Solutions', category: 'Dermatology', date: 'April 25, 2023', excerpt: 'Learn about common skin issues and how to address them effectively.' },
    { id: 6, title: 'Exercise Routines for Seniors', category: 'Geriatrics', date: 'April 20, 2023', excerpt: 'Safe and effective exercise routines tailored for older adults.' },
  ]

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Health and Wellness Blog</h1>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 mb-4 md:mb-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&text=Blog${post.id}`} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.category}</p>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}