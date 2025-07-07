interface ProjectCardProps {
  title: string;
  summary: string;
  partner?: string;
  tags?: string[];
  image?: string;
  link?: string;
}

export default function ProjectCard({ title, summary, partner, tags, image, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full">
      {image && (
        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-xl mb-2 text-dahong">{title}</h3>
        <p className="text-gray-700 mb-3 text-sm flex-1">{summary}</p>
        {partner && (
          <div className="text-xs text-gray-500 mb-2">주관: {partner}</div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="bg-[#fff4f0] text-dahong text-xs px-3 py-1 rounded-full font-medium">#{tag}</span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-gradient-to-r from-[#E16575] to-[#F2AC7D] text-white font-semibold rounded-full px-5 py-2 shadow hover:opacity-90 transition text-center"
            >
              자세히 보기
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 