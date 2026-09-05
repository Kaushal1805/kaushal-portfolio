import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Clock, Calendar, ArrowUpRight, BookOpen, Sparkles, Tag, ChevronDown, ChevronUp } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  url: string;
  featured?: boolean;
}

const realMediumPosts: BlogPost[] = [
  {
    id: '1',
    title: 'GPT-6 Astra Explained: Benchmarks, Pricing, and the Cybersecurity Risk Nobody’s Discussing',
    excerpt: 'OpenAI’s GPT-6 Astra tops computer-use benchmarks and crosses a “Critical” cybersecurity threshold. Here’s what the numbers really show...',
    category: 'AI & Cybersecurity',
    readTime: '6 min read',
    date: 'Sep 2026',
    tags: ['GPT-6', 'OpenAI', 'Cybersecurity', 'AI Benchmarks'],
    url: 'https://medium.com/@kaushalgangwar7088/gpt-6-astra-explained-benchmarks-pricing-and-the-cybersecurity-risk-nobodys-discussing-558605ce7088',
    featured: true,
  },
  {
    id: '2',
    title: 'The Age of Agentic AI Is Here — And It’s Changing Everything You Know About Software',
    excerpt: 'AI has stopped talking. Now it’s doing. Here’s what that means for your career, your company, and the future of work.',
    category: 'Agentic AI',
    readTime: '5 min read',
    date: 'Jun 2026',
    tags: ['Agentic AI', 'Future of Work', 'AI Agents', 'Software'],
    url: 'https://medium.com/@kaushalgangwar7088/the-age-of-agentic-ai-is-here-and-its-changing-everything-you-know-about-software-56cf69d0c6a5',
    featured: true,
  },
  {
    id: '3',
    title: 'TinyML: The Tiny Revolution That’s Quietly Making Every Device on Earth Intelligent',
    excerpt: 'While everyone was watching ChatGPT, AI snuck into your smoke detector, your car’s tire sensors, and your farmer’s soil monitor — running on microcontrollers.',
    category: 'Edge AI & TinyML',
    readTime: '7 min read',
    date: 'May 2026',
    tags: ['TinyML', 'Embedded AI', 'IoT', 'Microcontrollers'],
    url: 'https://medium.com/@kaushalgangwar7088/tinyml-the-tiny-revolution-thats-quietly-making-every-device-on-earth-intelligen-935add5a8d67',
    featured: true,
  },
  {
    id: '4',
    title: 'Agentic AI 2026: The Complete Guide to How AI Agents Are Transforming Enterprises',
    excerpt: 'Agentic AI is quietly replacing the way businesses run — and most people haven’t noticed yet. An in-depth guide on enterprise workflows.',
    category: 'Enterprise AI',
    readTime: '8 min read',
    date: 'May 2026',
    tags: ['AI Agents', 'Enterprise AI', 'Automation', 'Workflows'],
    url: 'https://medium.com/@kaushalgangwar7088/agentic-ai-2026-the-complete-guide-to-how-ai-agents-are-transforming-enterprises-0a052a880869',
    featured: true,
  },
  {
    id: '5',
    title: 'Agentic AI in 2026: The Silent Workforce Revolution That’s Replacing Teams, Not Just Tasks',
    excerpt: 'How autonomous AI agents are quietly rebuilding enterprise operations — and what you need to do before the gap becomes unbridgeable.',
    category: 'AI Automation',
    readTime: '6 min read',
    date: 'May 2026',
    tags: ['Autonomous Agents', 'Workforce', 'AI Revolution'],
    url: 'https://medium.com/@kaushalgangwar7088/agentic-ai-in-2026-the-silent-workforce-revolution-thats-replacing-teams-not-just-tasks-47df87d76443',
  },
  {
    id: '6',
    title: '🧠 AI Reasoning Models Explained: How ChatGPT o3 & DeepSeek-R1 Actually “Think” Before Answering',
    excerpt: 'A deep dive into test-time compute, chain-of-thought architectures, and how models like OpenAI o3 and DeepSeek-R1 generate reasoning tokens.',
    category: 'LLM Reasoning',
    readTime: '5 min read',
    date: 'May 2026',
    tags: ['ChatGPT o3', 'DeepSeek-R1', 'Reasoning Models', 'NLP'],
    url: 'https://medium.com/@kaushalgangwar7088/ai-reasoning-models-explained-how-chatgpt-o3-deepseek-r1-actually-think-before-answering-1c57395e27e1',
    featured: true,
  },
  {
    id: '7',
    title: 'How AI Is Transforming Education in 2026: The Future of Learning Every Student and Teacher Must Know',
    excerpt: 'Discover how Artificial Intelligence is revolutionizing education in 2026 — from personalized learning pathways and AI tutors to adaptive curriculum design.',
    category: 'EdTech & AI',
    readTime: '6 min read',
    date: 'May 2026',
    tags: ['Education AI', 'EdTech', 'AI Tutors', 'Learning'],
    url: 'https://medium.com/@kaushalgangwar7088/how-ai-is-transforming-education-in-2026-the-future-of-learning-every-student-and-teacher-must-a9b6ba0c7929',
  },
  {
    id: '8',
    title: 'AI Agents vs Traditional Apps',
    excerpt: 'Remember the App Store? That colorful grid of icons you tap a hundred times a day? Why conversational and agentic interfaces are replacing siloed mobile apps.',
    category: 'Software Architecture',
    readTime: '5 min read',
    date: 'Apr 2026',
    tags: ['AI Agents', 'Mobile Apps', 'UX Design', 'Software'],
    url: 'https://medium.com/@kaushalgangwar7088/ai-agents-vs-traditional-apps-c82dff674d1e',
  },
  {
    id: '9',
    title: 'Agentic AI Explained: How AI Agents Will Replace Your To-Do List in 2026',
    excerpt: 'The death of traditional to-do lists: how autonomous execution loops turn static task lists into self-completing workflows.',
    category: 'Productivity & AI',
    readTime: '5 min read',
    date: 'Mar 2026',
    tags: ['Agentic AI', 'Productivity', 'Automation'],
    url: 'https://medium.com/@kaushalgangwar7088/agentic-ai-explained-how-ai-agents-will-replace-your-to-do-list-in-2026-3ead9a459b03',
  },
  {
    id: '10',
    title: 'How I Use ChatGPT for Data Analytics (My Real Workflow)',
    excerpt: 'A practical, step-by-step breakdown of leveraging LLMs for exploratory data analysis, code debugging, and SQL query generation.',
    category: 'Data Analytics',
    readTime: '6 min read',
    date: 'Mar 2026',
    tags: ['Data Analytics', 'ChatGPT', 'Python', 'SQL'],
    url: 'https://medium.com/@kaushalgangwar7088/how-i-use-chatgpt-for-data-analytics-my-real-workflow-fbf32bbab34b',
    featured: true,
  },
  {
    id: '11',
    title: 'Will AI Steal Your Job? The Truth About Work in Tomorrow’s World',
    excerpt: 'Discover how AI is reshaping careers and creating new opportunities. Learn which jobs will thrive and which skillsets are future-proof.',
    category: 'Future of Work',
    readTime: '5 min read',
    date: 'Mar 2026',
    tags: ['Future of Work', 'AI Jobs', 'Career Guidance'],
    url: 'https://medium.com/@kaushalgangwar7088/will-ai-steal-your-job-the-truth-about-work-in-tomorrows-world-457f48903754',
  },
  {
    id: '12',
    title: '🚀 Streamlit Tutorial: A Complete Beginner’s Guide to Building Python Web Apps for Data Science',
    excerpt: 'A complete, beginner-friendly guide explaining everything from installation to building and deploying interactive machine learning dashboards.',
    category: 'Python & Streamlit',
    readTime: '7 min read',
    date: 'Mar 2026',
    tags: ['Streamlit', 'Python', 'Data Science', 'Web Apps'],
    url: 'https://medium.com/@kaushalgangwar7088/streamlit-tutorial-a-complete-beginners-guide-to-building-python-web-apps-for-data-science-800997324d76',
    featured: true,
  },
  {
    id: '13',
    title: 'How to Earn Money Using AI: The Complete Beginner’s Guide for 2025',
    excerpt: 'Artificial intelligence has transformed from a futuristic concept into a practical tool anyone can use to build high-value services and products.',
    category: 'AI Monetization',
    readTime: '6 min read',
    date: 'Jan 2025',
    tags: ['AI Business', 'Freelancing', 'Automation'],
    url: 'https://medium.com/@kaushalgangwar7088/how-to-earn-money-using-ai-the-complete-beginners-guide-for-2025-0355c5b2c503',
  },
  {
    id: '14',
    title: 'What is Artificial Intelligence and Why Should You Care?',
    excerpt: 'Understanding the basic definition of AI, how algorithms make decisions, and why AI literacy is essential for modern engineers.',
    category: 'AI Fundamentals',
    readTime: '5 min read',
    date: 'Jan 2025',
    tags: ['AI Basics', 'Machine Learning', 'Tech Literacy'],
    url: 'https://medium.com/@kaushalgangwar7088/what-is-artificial-intelligence-and-why-should-you-care-0a274c221e7c',
  },
];

// Medium Custom SVG Icon
export const MediumIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const categories = ['All', 'Agentic AI', 'AI & Cybersecurity', 'LLM Reasoning', 'Edge AI & TinyML', 'Data Analytics', 'Python & Streamlit'];

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = realMediumPosts.filter(post => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory || post.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
  });

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

  return (
    <section id="blogs" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="aurora-blob w-[500px] h-[500px] bg-primary -top-20 right-0 opacity-15" />
      <div className="aurora-blob w-[400px] h-[400px] bg-secondary -bottom-20 left-10 opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-xs font-mono text-primary mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>AUTHENTIC PUBLICATIONS</span>
          </motion.div>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Articles on Medium</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Real published articles covering Agentic AI, GPT-6, TinyML, LLM Reasoning, Data Analytics, and Python.
          </p>
        </motion.div>

        {/* Medium Hero Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 mb-10 border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center p-3 shadow-lg shrink-0">
                <MediumIcon className="w-8 h-8 fill-current" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-heading font-bold text-foreground">Kaushal Kumar</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">@kaushalgangwar7088</span>
                  <span className="text-xs text-muted-foreground font-mono">({realMediumPosts.length} Published Stories)</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Writing on Agentic AI, LLM Reasoning, TinyML, AI Workflows, and Data Science.
                </p>
              </div>
            </div>

            <motion.a
              href="https://medium.com/@kaushalgangwar7088"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm transition-all shadow-md shrink-0"
            >
              <MediumIcon className="w-4 h-4 fill-current" />
              <span>Visit Medium Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'glass-strong text-muted-foreground hover:text-foreground hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-2xl p-6 flex flex-col justify-between group border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all relative overflow-hidden"
              >
                {/* Corner accent for featured posts */}
                {post.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                <div>
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground font-mono mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2.5">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {post.title}
                    </a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                      >
                        <Tag className="w-2.5 h-2.5 opacity-60" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                      <MediumIcon className="w-3 h-3" />
                      Medium Story
                    </span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary/90 hover:underline"
                    >
                      <span>Read Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredPosts.length > 6 && (
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-foreground font-semibold text-sm hover:border-primary/50 transition-all"
            >
              {showAll ? (
                <>
                  <span>Show Fewer Stories</span>
                  <ChevronUp className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  <span>Show All {filteredPosts.length} Articles</span>
                  <ChevronDown className="w-4 h-4 text-primary" />
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* View All on Medium Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://medium.com/@kaushalgangwar7088"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/40 text-primary font-semibold text-sm transition-all hover:bg-primary/10 hover:border-primary shadow-sm"
          >
            <MediumIcon className="w-4 h-4 fill-current" />
            <span>Open @kaushalgangwar7088 on Medium</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
