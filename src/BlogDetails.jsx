import { useState } from 'react';
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2, ChevronRight } from 'lucide-react'

// Dummy data for the current blog post
const currentBlog = {
  id: 1,
  title: '10 Tips for a Healthy Heart',
  category: 'Cardiology',
  date: 'May 15, 2023',
  author: 'Dr. Jane Smith',
  content: `
    <p>Maintaining a healthy heart is crucial for overall well-being. Here are 10 tips to keep your heart in top shape:</p>
    <ol>
      <li>Exercise regularly - Aim for at least 30 minutes of moderate exercise most days of the week.</li>
      <li>Eat a balanced diet - Focus on fruits, vegetables, whole grains, and lean proteins.</li>
      <li>Manage stress - Practice relaxation techniques like meditation or deep breathing exercises.</li>
      <li>Get enough sleep - Aim for 7-9 hours of quality sleep each night.</li>
      <li>Quit smoking - If you smoke, seek help to quit. It's one of the best things you can do for your heart.</li>
      <li>Limit alcohol consumption - If you drink, do so in moderation.</li>
      <li>Maintain a healthy weight - Excess weight puts extra strain on your heart.</li>
      <li>Control your blood pressure - Regular check-ups and medication if necessary can help keep your blood pressure in check.</li>
      <li>Manage diabetes - If you have diabetes, work closely with your doctor to keep it under control.</li>
      <li>Stay socially connected - Strong social ties have been linked to better heart health.</li>
    </ol>
    <p>Remember, small changes can make a big difference in your heart health. Always consult with your healthcare provider before making significant changes to your diet or exercise routine.</p>
  `,
  likes: 150,
  dislikes: 5,
}

// Dummy data for comments
const initialComments = [
  {
    id: 1,
    author: 'John Doe',
    content: 'Great article! I found the tips very helpful.',
    likes: 10,
    dislikes: 0,
    replies: [
      {
        id: 2,
        author: 'Jane Doe',
        content: 'I agree! Especially about the importance of sleep.',
        likes: 5,
        dislikes: 0,
      },
    ],
  },
  {
    id: 3,
    author: 'Bob Smith',
    content: 'I would add that staying hydrated is also important for heart health.',
    likes: 8,
    dislikes: 1,
    replies: [],
  },
]

// Dummy data for similar blogs
const similarBlogs = [
  { id: 2, title: 'Understanding Cholesterol Levels', category: 'Cardiology' },
  { id: 3, title: 'The Benefits of Mediterranean Diet', category: 'Nutrition' },
  { id: 4, title: 'Stress and Your Heart: What is the Connection?', category: 'Cardiology' },
]

export default function BlogDetails() {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [likes, setLikes] = useState(currentBlog.likes)
  const [dislikes, setDislikes] = useState(currentBlog.dislikes)

  const handleLike = () => setLikes(likes + 1)
  const handleDislike = () => setDislikes(dislikes + 1)

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        author: 'Anonymous User',
        content: newComment,
        likes: 0,
        dislikes: 0,
        replies: [],
      }
      setComments([newCommentObj, ...comments])
      setNewComment('')
    }
  }

  const handleReply = (commentId, replyContent) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: comment.replies.length + 1,
              author: 'Anonymous User',
              content: replyContent,
              likes: 0,
              dislikes: 0,
            },
          ],
        }
      }
      return comment
    })
    setComments(updatedComments)
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{currentBlog.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span>{currentBlog.date}</span>
          <span className="mx-2">•</span>
          <span>{currentBlog.category}</span>
          <span className="mx-2">•</span>
          <span>By {currentBlog.author}</span>
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt={currentBlog.title} 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div 
          className="prose max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: currentBlog.content }}
        />

        <div className="flex items-center space-x-4 mb-8">
          <button onClick={handleLike} className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <ThumbsUp size={20} />
            <span>{likes}</span>
          </button>
          <button onClick={handleDislike} className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
            <ThumbsDown size={20} />
            <span>{dislikes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
            />
            <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Post Comment
            </button>
          </form>
          
          {comments.map(comment => (
            <div key={comment.id} className="mb-4 border-b pb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{comment.author}</h3>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 hover:text-blue-600">
                    <ThumbsUp size={16} />
                  </button>
                  <span>{comment.likes}</span>
                  <button className="text-gray-600 hover:text-red-600">
                    <ThumbsDown size={16} />
                  </button>
                  <span>{comment.dislikes}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{comment.content}</p>
              <button 
                onClick={() => {
                  const reply = prompt('Enter your reply:')
                  if (reply) handleReply(comment.id, reply)
                }}
                className="text-blue-600 hover:underline"
              >
                Reply
              </button>
              
              {comment.replies.length > 0 && (
                <div className="ml-8 mt-4 space-y-4">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{reply.author}</h4>
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-600 hover:text-blue-600">
                            <ThumbsUp size={14} />
                          </button>
                          <span>{reply.likes}</span>
                          <button className="text-gray-600 hover:text-red-600">
                            <ThumbsDown size={14} />
                          </button>
                          <span>{reply.dislikes}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Similar Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarBlogs.map(blog => (
              <Link key={blog.id} to={`/blog/${blog.id}`} className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80&text=Blog+${blog.id}`} 
                  alt={blog.title} 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.category}</p>
                <div className="mt-2 flex items-center text-blue-600">
                  <span>Read More</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}