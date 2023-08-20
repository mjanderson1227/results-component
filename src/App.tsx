class Stat {
  public image: string;
  public color: string;
  public text: string;
  public percentage: number

  constructor(img: string, color: string, text: string, percentage: number) {
    this.image = img;
    this.color = color;
    this.text = text;
    this.percentage = percentage;
  }
}

export default function App() {
  return (
    <div className='lg:h-[100dvh] h-[120dvh] bg-slate-200 lg:p-[15dvh] lg:pr-[40dvh] lg:pl-[40dvh] flex flex-col'>
      <div className="bg-white h-[100%] rounded-xl grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2">
        <PercentageDisplay percentScore={76} percentile={65} statusMessage="Good" />
        <StatsDisplay />
      </div>
    </div>
  );
}

interface PercentageDisplayProps {
  percentScore: number;
  percentile: number;
  statusMessage: "Good" | "Great" | "Poor" | "Average";
}
function PercentageDisplay({percentScore, percentile, statusMessage}: PercentageDisplayProps) {
  return (
    <div className="bg-gradient-to-t from-indigo-600 to-violet-900 text-zinc-300 font-extrabold lg:rounded-t-xl rounded-b-xl flex flex-col items-center justify-around lg:p-16 h-[100%] min-h-0">
      <h1 className="lg:text-2xl">Your Result</h1>
      <div className="lg:h-48 h-36 w-36 lg:w-48 lg:gap-1 bg-white rounded-full bg-gradient-to-t from-indigo-700 to-violet-800 flex flex-col items-center justify-center">
        <h1 className="font-bold lg:text-5xl text-4xl">{percentScore}</h1>
        <h3 className="font-medium lg:text-lg text-gray-400">of 100</h3>
      </div>
      <h1 className="font-extrabold lg:text-3xl text-2xl">{statusMessage}</h1>
      <p className="block text-center lg:w-60 w-56 font-medium">You scored higher than {percentile}% of the people who have taken these tests.</p>
    </div>
  );
}

function StatsDisplay() {
  const stats: Stat[] = [
    new Stat("/images/icon-reaction.svg", "red", "Reaction", 80),
    new Stat("/images/icon-memory.svg", "yellow", "Memory", 92),
    new Stat("/images/icon-verbal.svg", "green", "Verbal", 61),
    new Stat("/images/icon-visual.svg", "blue", "Visual", 72)
  ];

  const colorMap = new Map([
    ["red", ["bg-red-50", "text-red-400"]],
    ["yellow", ["bg-yellow-50", "text-yellow-400"]],
    ["green", ["bg-green-50", "text-green-400"]],
    ["blue", ["bg-blue-50", "text-blue-400"]]
  ]);

  return (
    <div className="">
      <h1>Summary</h1>
      <ul className="flex flex-col">
        {
          stats.map(element => {
            const { image, color, text, percentage } = element;
            return (
              <li key={text} >
                <div className={colorMap.get(color)![0]}>
                  <img src={image} alt="A listing item" />
                  <h1 className={colorMap.get(color)![1]}>{text}</h1>
                  <h3 className="font-bold">{percentage}</h3>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
