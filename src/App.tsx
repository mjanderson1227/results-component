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

class Style {
  public image: string;
  public color: string;
  public text: string;
  public percentage: number;

  constructor(image: string, color: string, text: string, percentage: number) {
    this.image = image;
    this.color = color;
    this.text = text;
    this.percentage = percentage;
  }
}
function StatsDisplay() {
  const stats: Style[] = [
    new Style("/images/icon-reaction.svg", "red", "Reaction", 80),
    new Style("/images/icon-memory.svg", "yellow", "Memory", 92),
    new Style("/images/icon-verbal.svg", "green", "Verbal", 61 ),
    new Style("/images/icon-visual.svg", "blue", "Visual", 72 )
  ];

  const colorStyles: Record<string, string[]> = {
    "red": ["bg-red-50 rounded-lg", "text-red-400"],
    "yellow": ["bg-yellow-50 rounded-lg", "text-yellow-400"],
    "green": ["bg-green-50 rounded-lg", "text-green-400"],
    "blue": ["bg-blue-50 rounded-lg", "text-blue-400"]
  }

  return (
    <div className="p-10">
      <ul className="flex flex-col gap-4 justify-start">
        <li className="self-start mb-4">
          <h1>Summary</h1>
        </li>
        {
          stats.map(element => {
            const { image, color, text, percentage } = element;
            return (
              <li key={text}>
                <div className={colorStyles[color][0]}>
                  <div className="flex p-4 justify-between">
                    <img src={image} alt="A listing item" className="mr-4"/>
                    <div>
                      <h1 className={colorStyles[color][1]}>{text}</h1>
                    </div>
                    <h3 className="font-bold ml-auto">{percentage}&nbsp;<span className="text-zinc-500">/&nbsp;100</span></h3>
                  </div>
                </div>
              </li>
            );
          })
        }
        <li className="text-slate-100 bg-slate-800 text-center w-full h-12 rounded-full flex-grow lg:mt-10 self-center flex-col flex justify-center">
          <button className="h-full rounded-full">Continue</button>
        </li>
      </ul>
    </div>
  );
}
