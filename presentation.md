[Link to video](https://www.youtube.com/watch?v=84Uj-r_Sh3Y)

[Link to presentation](https://a-reznikov-computer-architecture.netlify.app)

Hello, everyone.
My name is Reznikov Aleksandr and I am a student of the "RS School". 
This presentation is dedicated to computer architecture.
Let's get started.
We use computers every day, and you are most likely watching this presentation from your computer screen.
But have you often wondered how this complex system actually works?
In this presentation, I will try to tell you what computer architecture is and the stages of its development.

Human actions can be compared to the actions of a computer.
He receives information, analyzes it, comprehends it and shares it with other people.
Let's draw an analogy: what do a human and a computer do:

A personal computer is arranged as follows:
Information is entered on a personal computer using devices such as a keyboard and mouse.
Information storage is a permanent storage, RAM and processor cache.
A CPU is used to process it, and the information is displayed on the monitor.
All of this, taken together, is a computer architecture.
One of the earliest and most popular was the von Neumann architecture.

The ENIAC was the first general-purpose programmable electronic digital computer, released in 1946.
Addition or subtraction of two ten-digit numbers could be done at the rate of 5000 per second.

Besides its speed, the most remarkable thing about the ENIAC was its size and complexity.
The ENIAC was composed of 18,000 vacuum tubes, 70,000 resistors and 5 million hand-soldered joints.
It weighed more than 27 tons.

Calculations were made in decimal notation, which significantly slowed down the computer and led to overspending of lamps.
The ENIAC was programmable, but its programming was carried out using a switching panel. To set up the program, it was necessary to connect the wires in a special way: it could last many hours, days or even weeks.

The creators of ENIAC Eckert and Mauchly saw its shortcomings, so in 1943 they began to design an improved model of an electronic computer. The future computer was named EDVAC.

While working on EDVAC, John Eckert first proposed the idea of a programs stored in memory.
This became the main feature that for many years determined the basic principles of building subsequent computers.
EDVAC memory was manufactured on delay lines — special mercury tubes that store information.
The data was encoded in binary, not in decimal, which reduced the number of electronic lamps.

A year and a half later, John von Neumann, a renowned mathematician, joined Eckert and Moakley
as a scientific consultant.
He immediately saw the promise of a new computer and helped get funding from the US Army.
Scientists were required to regularly report to the military on the work done.
Von Neumann prepared a " First Draft of a Report on the EDVAC ".
Thus, the computer structure described in the report was called the von Neumann architecture.

The document describes a design architecture for an electronic digital computer with these components:
A processing unit with both an arithmetic logic unit and processor registers;
A control unit that includes an instruction register and a program counter;
Memory that stores data and instructions;
External mass storage;
Input and output mechanisms;
This architecture formed the basis of most general-purpose computers.

The essence of von Neumann 's concept of a computer can be reduced to four principles:
The principle of binary coding.
According to this principle, all information, both data and commands, are encoded with binary digits.
Program control.
The commands are stored in memory cells of the computer and are executed in a natural sequence.
If necessary, with the help of special commands, this sequence can be changed.
Memory uniformity.
Commands and data are stored in the same memory.
They can only be recognized by the way they are used.
Addressability.
Structurally, the main memory consists of renumbered cells.
Any cell is available to the processor at any time.
It follows from this that it is possible to give names to memory areas, actually use variables.

It turns out that there is a fundamental flaw in this architecture, the so-called "bottleneck".
Because the single bus can only access one of the two classes of memory at a time, throughput is lower than the late at which the CPU can work.
The CPU is continually forced to wait for needed data to move to or from memory.

Harvard Architecture is the digital computer architecture whose design is based on the concept where
there are separate storage and separate buses for instruction and data.
It was basically developed to overcome the bottleneck of Von Neumann Architecture.
The advantage is that the CPU can access instructions and read/write at the same time.

IBM has created a personal computer architecture that has become the world standard on the market for many years.
Its main difference from its competitors was in a completely open structure.
A personal computer has ceased to be a finished product.
End customers or firms that assemble IBM-based personal computers can themselves determine the set of components included in the computer.
And both at the hardware level and at the operating system level.

The computer shown in the previous slide had an Intel 8008 installed.
This processor was released in 1972 and had 3,5000 transistors.
And now, for example, there are 8.5 billion such transistors in Apple A13 Bionic — this is more than people on the planet!

To understand the size of modern transistors, we can make a simple comparison — for example, with a human hair!
Almost 1.5 million modern transistors, manufactured using a 7-nanometer process technology, can be placed on a slice of a human hair. 
The smaller the transistor, the less it consumes energy and the more they are placed on the chip, which means that productivity increases.

Moore's law is the observation that the number of transistors in an integrated circuit doubles about every two years. 
In 2007, Moore stated that the law would obviously soon cease to apply due to the atomic nature of matter and the speed limit of light, and in 2012, a research group from the University of New South Wales announced the development of the first working transistor consisting of a single atom.
There is an assumption that the next revolution in computing will occur with the advent of quantum computers.

One of the most significant and expected technologies of the last decades is quantum computers.
These are computing devices that use the laws of quantum mechanics to process and transmit data.
Due to this, in a number of algorithms, you can get a huge advantage in computing speed compared to conventional computers.
Apart from the fact that quantum computers look fantastic, they don't just have a different computational logic — they are in a completely different dimension.

How quantum computers work?
Let's start with the basics of the basics.
An ordinary computer operates with bits — the smallest particle of information that has two values: 0 and 1.
Quantum computers have another minimal unit of information — a qubit. And to fully understand how it works, 
you need to at least roughly understand the principles of quantum superposition.

There is a classic example with Schrodinger's cat.
Let's say we have a closed safe.
Inside it sits an ordinary cat and a hellish machine, protected from it.
The principle of the hellish machine is approximately the following: there is a very small amount of radioactive atoms inside.
And the probability that at least one of them will disintegrate in an hour is equal to the probability that none will disintegrate.
That is, 50-50.

There is an electron-sensitive screen around the radioactive substance.
If at least one atom disintegrates, it will trigger a mechanism that will release poisonous gas, and the cat will die.
It is impossible for an observer to accurately predict whether the cat is alive or not. 
To do this, you need to open the safe and look.
And when it is closed, the cat is in a superposition — he is both alive and dead.
This thought experiment roughly explains how quantum superposition works which plays a key role in qubit functions.

A qubit can take the value zero or one, but at the same time be between zero and one, being in a superposition.
Not a well-defined value, but the probability of getting one of these states.
I'll try to explain it even easier.

3 bits of information can give one of eight combinations of zeros and ones: 000 or 001 or 110 and etc.
Just one.
3 qubits operate with eight possible combinations at once, calculating probabilities, not clear values.
Moreover, with each qubit, the separation in computing power from a conventional processor increases exponentially.
10 qubits can operate with 1024 combinations, and 30 — more than 1 billion.

Quantum computers have quantum superiority – it is the ability of a quantum computer to solve problems that are fundamentally unsolvable for an ordinary machine or that require a huge amount of time over thousands
or millions of years of operation.

On 3 December 2020, USTA announced in Science that Jiuzhang (quantum computer) successfully performed Gaussian boson sampling in 200 seconds.
The USTA group estimated that it would take 2.5 billion years for the Sunway TaihuLight supercomputer to perform the same calculation.
Quantum computers operate at temperatures close to absolute zero, which is - 273 degrees Celsius.
Currently, quantum computers are being developed that do not depend on temperature and use photons.

As we have seen, since 1945 (the year of the release of von Neumann's first article), for almost 80 years of development of computer architectures, this area has stepped very far.
In recent decades, new concepts have appeared and continue to appear, which are based on completely different principles. 
But at the same time, the architectural principles outlined by von Neumann are still actively applied and,
apparently, will be applied for a long time in most tasks.

Thank you, for your attention. 
I hope you enjoyed the presentation and found it useful.
Goodbye.