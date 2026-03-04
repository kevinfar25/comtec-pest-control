import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface QA {
  question: string;
  answer: string;
  keywords: string[];
}

const QA_DATA: QA[] = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a full range of pest control services including cockroach control, ant control, rodent control, fly & mosquito control, bird control, and woodworm & termite treatment.',
    keywords: ['services', 'offer', 'provide', 'treat', 'handle', 'deal with', 'specialize'],
  },
  {
    question: 'How do I book a service?',
    answer: 'You can book online through our website by clicking "Book Online" in the menu, or call us on 21800666 or 79800666 and we\'ll arrange everything for you.',
    keywords: ['book', 'booking', 'appointment', 'schedule', 'reserve', 'request'],
  },
  {
    question: 'What areas in Malta do you cover?',
    answer: 'We cover the whole of Malta and Gozo. Same-day and next-day appointments are available island-wide.',
    keywords: ['area', 'cover', 'location', 'gozo', 'malta', 'island', 'where', 'region'],
  },
  {
    question: 'Do you serve both homes and businesses?',
    answer: 'Yes! We provide pest control for both residential properties (homes, apartments) and commercial premises (offices, restaurants, warehouses, and more).',
    keywords: ['residential', 'commercial', 'business', 'home', 'house', 'apartment', 'office', 'restaurant', 'company'],
  },
  {
    question: 'How much does pest control cost?',
    answer: 'Prices vary depending on the type of pest and size of the property. Contact us on 21800666 or 79800666 for a free quote tailored to your situation.',
    keywords: ['price', 'cost', 'charge', 'fee', 'rate', 'quote', 'expensive', 'cheap', 'affordable', 'how much'],
  },
  {
    question: 'Is same-day service available?',
    answer: 'Yes, we offer same-day and next-day service across Malta. Call us on 21800666 or 79800666 and we\'ll do our best to get a technician out to you as quickly as possible.',
    keywords: ['same day', 'same-day', 'emergency', 'urgent', 'fast', 'quick', 'asap', 'today', 'tomorrow', 'next day'],
  },
  {
    question: 'How long does a treatment take?',
    answer: 'Treatment time depends on the pest and the size of the area. Most residential treatments take between 1 and 2 hours. Our technician will give you a better estimate on the day.',
    keywords: ['how long', 'duration', 'takes', 'treatment time'],
  },
  {
    question: 'Are your products safe for children and pets?',
    answer: 'We use professional-grade products that are safe when applied correctly by our certified technicians. We always advise clients on any precautions needed (such as vacating the property for a short period), which we\'ll explain before starting.',
    keywords: ['safe', 'child', 'children', 'kids', 'pet', 'pets', 'dog', 'cat', 'baby', 'toxic', 'dangerous', 'harm'],
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Absolutely. Every Comtec technician is fully certified and licensed. We don\'t send amateurs — only trained professionals who know exactly what they\'re doing in your home.',
    keywords: ['certified', 'licensed', 'qualified', 'trained', 'professional', 'experienced', 'accredited'],
  },
  {
    question: 'Do you offer a guarantee?',
    answer: 'Yes. Every treatment comes with a guarantee. If the problem returns after our treatment, we come back — at no extra cost — until it\'s completely resolved.',
    keywords: ['guarantee', 'warranty', 'come back', 'return', 'revisit', 'follow-up', 'money back'],
  },
  {
    question: 'How do I get rid of cockroaches?',
    answer: 'Shop sprays only kill what you can see — they don\'t reach the colony hiding in walls, drains, and crevices. Our cockroach treatment eliminates the entire colony at the source for a lasting result.',
    keywords: ['cockroach', 'cockroaches', 'roach', 'roaches', 'cucaracha'],
  },
  {
    question: 'How do I get rid of ants?',
    answer: 'Ant trails in your home mean there\'s a nearby colony. We destroy the colony at the source using targeted treatments so they don\'t just move to another room.',
    keywords: ['ant', 'ants', 'ant trail', 'ant colony'],
  },
  {
    question: 'How do I get rid of mice or rats?',
    answer: 'Rodents carry disease and cause serious damage to wiring and insulation. We remove them, seal all entry points, and put preventive measures in place to protect your home permanently.',
    keywords: ['mouse', 'mice', 'rat', 'rats', 'rodent', 'rodents', 'vermin'],
  },
  {
    question: 'How do you control flies and mosquitoes?',
    answer: 'We identify and eliminate breeding sites (standing water, waste areas), then apply barriers and treatments to keep them away. We can treat both indoor and outdoor spaces.',
    keywords: ['fly', 'flies', 'mosquito', 'mosquitoes', 'insect', 'insects', 'buzzing'],
  },
  {
    question: 'Do you handle bird problems?',
    answer: 'Yes. We install humane bird deterrents such as spikes, netting, and wire systems to stop birds from nesting on your property — keeping the mess and damage away for good.',
    keywords: ['bird', 'birds', 'pigeon', 'pigeons', 'seagull', 'seagulls', 'nest', 'nesting', 'droppings'],
  },
  {
    question: 'Do you treat woodworm and termites?',
    answer: 'Yes. Termites and woodworm silently destroy timber structures before you notice. We detect them early using specialist equipment and apply treatments that eliminate them completely and protect your property.',
    keywords: ['woodworm', 'termite', 'termites', 'timber', 'wood', 'wooden', 'furniture', 'floors', 'joists'],
  },
  {
    question: 'How do I contact you?',
    answer: 'You can reach us by phone on 21800666 (landline) or 79800666 (mobile), or send us a message through the Contact page on our website.',
    keywords: ['contact', 'reach', 'call', 'phone', 'email', 'message', 'get in touch', 'speak'],
  },
  {
    question: 'What are your phone numbers?',
    answer: 'Our landline is 21800666 and our mobile is 79800666. Both numbers are answered by our team during business hours.',
    keywords: ['number', 'phone number', 'telephone', 'landline', 'mobile', 'call us'],
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Most infestations are resolved in 1–2 treatments. Some cases (such as heavy rodent infestations or termites) may require a treatment plan over several visits. We\'ll be upfront about what\'s needed after the initial inspection.',
    keywords: ['how many', 'treatments', 'visits', 'sessions', 'once', 'twice', 'multiple', 'repeat'],
  },
  {
    question: 'How do I prepare for a pest control visit?',
    answer: 'We\'ll guide you through any preparation needed when you book. Generally, for cockroach or ant treatments, clear under-sink areas and remove food from counters. For rodent work, identify where you\'ve seen activity. Our technician will advise you fully on arrival.',
    keywords: ['prepare', 'preparation', 'before', 'ready', 'what to do', 'steps', 'clean', 'clear'],
  },
  {
    question: 'What are your opening hours?',
    answer: 'Our team is available Monday to Saturday. For urgent or emergency callouts, call us on 21800666 or 79800666 and we\'ll do our best to assist you as soon as possible.',
    keywords: ['opening hours', 'open', 'hours', 'business hours', 'working hours', 'when are you', 'what time', 'closed', 'available'],
  },
];

function findBestAnswer(input: string): string {
  const lower = input.toLowerCase().trim();
  if (!lower) return '';

  let bestScore = 0;
  let bestAnswer = '';

  for (const qa of QA_DATA) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (lower.includes(kw.toLowerCase())) {
        score += kw.split(' ').length; // multi-word keywords score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = qa.answer;
    }
  }

  if (bestScore === 0) {
    return "I'm not sure I have an answer for that. Please call us on 21800666 or 79800666 and our team will be happy to help!";
  }

  return bestAnswer;
}

interface Message {
  from: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hi! I\'m the Comtec assistant. How can I help you today? You can ask me about our services, pricing, bookings, or anything else pest-control related.' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { from: 'user', text: trimmed };
    const botReply: Message = { from: 'bot', text: findBestAnswer(trimmed) };

    setMessages(prev => [...prev, userMsg, botReply]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden" style={{ maxHeight: '520px' }}>

          {/* Header */}
          <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <p className="font-semibold text-sm leading-tight">Comtec Assistant</p>
                <p className="text-xs text-emerald-200">Ask me anything</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-emerald-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-sm'
                      : 'bg-white border border-neutral-200 text-neutral-700 rounded-bl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 bg-neutral-50 flex flex-wrap gap-1.5 shrink-0">
              {['What services do you offer?', 'How do I book?', 'What areas do you cover?'].map(q => (
                <button
                  key={q}
                  onClick={() => {
                    const userMsg: Message = { from: 'user', text: q };
                    const botReply: Message = { from: 'bot', text: findBestAnswer(q) };
                    setMessages(prev => [...prev, userMsg, botReply]);
                  }}
                  className="text-xs bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full px-3 py-1 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-neutral-200 px-3 py-3 flex items-center gap-2 bg-white shrink-0">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 text-sm border border-neutral-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="w-9 h-9 bg-emerald-600 hover:bg-emerald-700 disabled:bg-neutral-300 text-white rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

    </div>
  );
}
