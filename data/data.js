var questions = [
{
   "id":"0",
   "question":"Describe the syntax and semantics of a Bayesian Network.",
   "answer":"Syntax: <ul> <li>Nodes and links between them</li> <li>Nodes represent random variables, one node per variable</li> <li>Nodes have a finite number of states</li> <li>Links are directed, and the links between the nodes together define a directed, acyclic graph.</li> <li>Nodes are augmented with “local” conditional probability distributions (Probability of that variable given its parents)</li> </ul><br /> Semantics: Here it is sufficient to show the “global semantics” of the BN (the factorization of the joint). If you want to, you can show off with information about local semantics, conditional independences, etc., but all of this is actually implied by the global semantics."
},

{
   "id":"1",
   "question":"How can one characterize problem domains where Bayesian networks can be used with success?",
   "answer":"Such problem domains should have a reasonably clear view of what (directly) affects what, and give a probabilistic distribution that has some certainty to it. An example of this is diagnosing patients. There is a lot of patient data and knowledge that can be used to provide reasonable probability distributions of what causes what.."
},

{
   "id":"2",
   "question":"Can you give an example of a problem domain where Bayesian networks do not fit well?",
   "answer":"Predicting stock prices. It’s hard to put descriptive values on the nodes, and the strength of influences are hard to tell."
},

{
   "id":"3",
   "question":"Two of the reasoning methods used with Hidden Markov Models are filtering and smoothing. Explain what these techniques do, and give practical examples where Hidden Markov Models combined with each of the two reasoning techniques can be useful. What are the differences between the two techniques?",
   "answer":"Filtering predicts the current state of the environment (prediction updated by evidence), while smoothing updates previous predicaments based on newer evidence (than when it was first predicted by filtering). Hidden Markov models allow us to efficiently calculate these operations using basic matrix operations."
},

{
   "id":"4",
   "question":"What is Prediction? Give an example.",
   "answer":"Prediction is the belief of future state(s) based on evidence so far. It’s also the first part of the filtering process. Using the sun/shorts example above, We have P(sun<sub>2</sub>) purely based on P(sun<sub>1</sub>) (first order markov process) with a chance of [0.8, 0,2]*0.97 + [0.2, 0.8]*0.03 = [0.782, 0.218]"
},

{
   "id":"5",
   "question":"What is Most Likely Explaination? Give an example.",
   "answer":"Most likely explaination is finding the most likely series of events, given all the evidence. This is much like any detective series."
},

{
   "id":"6",
   "question":"What is Smoothing? Give an example.",
   "answer":"Smoothing is updating our beliefs of previous states based on new (as well as old) evidence. Use the sun/shorts example above. If we have observed shorts three days in a row and given Sun0."
},

{
   "id":"7",
   "question":"What is Filtering? Give an example.",
   "answer":"Filtering is prediction updated by evidence. Say that you’ll be wearing shorts with probability 0.8 if it’s sun, and 0.1 if it’s not sun. P(shorts|sun) = 0.8, P(shorts|!sun) = 0.1. Say that the chance that the weather will change is 0.2. P(sun|sun) = P (!sun|!sun) = 0.8, P(!sun|sun) = P (sun|!sun) = 0.2. Given Sun<sub>0</sub> and Shorts<sub>1</sub> the prediction is P(sun<sub>1</sub>) is [0.8, 0.2], and updated by evidence its  P(X1|X0)*P(X1|E1) =  [0.8, 0.2]*[0.8, 0.1] = [0.97, 0.03]"
},

{
   "id":"8",
   "question":"What is Most Likely Explaination? Give an example.",
   "answer":"Most likely explaination is finding the most likely series of events, given all the evidence. This is much like any detective series."
},

{
   "id":"9",
   "question":"Explain the Markov assumptions using your own words.",
   "answer":"The future states are idependant of all previous states, given the current state. While it at first glance might seem like an unlikely assumption, think of it as that all influence from the past to the future is caputred in the present moment."
},

{
   "id":"10",
   "question":"What are Kalman Filters?",
   "answer":"Kalman filters is an algorithm for markov processes applicable where variables are continous and observations unreliable. It is also known by a more descriptive name, linear quadratic estimation. It’s results tend to be more accurate than those based on a single variable alone."
},

{
   "id":"11",
   "question":"What is the maximum expected utility principle.",
   "answer":"MEU is the principle that any rational agent must comply with, basically it says that when acting rationally, there exists a utility function that allocates a real number to any situation. The function is such that the agent always prefers states with a high utility to those with lower utility. Moreover, if the utility an agent will obtain is uncertain, any rational agent MUST prefer the scenario that gives the highest utility on average (or, as the principle states, Maximum Expected Utility). The good thing about this is that MEU defines rational behaviour, and MEU is therefore the behaviour we want from our agent."
},

{
   "id":"12",
   "question":"What assumptions are used when modelling Markov Decision Processes (also called MDPs)?",
   "answer":"<ul><li>The Markov assumption: Future is conditionally independent of the past given the current situation.</li> <li>The domain is fully observable</li> <li>The uncertainty in the domain is due to uncertainty in the effect of actions, not, e.g., in which state the world is in.</li> <li>The domain is stationary, so the effect of an action A in situation S does not depend on the time where action A is used.</li> <li>There is a reward given at each time t, and this reward depends on the situation at time t and the action taken at time t, and not the previous history.</li> <li>We want to maximize the CUMMULATIVE, DISCOUNTED reward over an infinite time horizon.</li></ul><br /> If I give you questions like “what is the assumptions behind <whatever>”, you may want to include an example or two to show domains that (approximately) satisfy the assumptions. This shows us/makes us believe that you have not just learned something by heart, by also understood it."
},

{
   "id":"13",
   "question":"Explain the syntax of an influence diagram.",
   "answer":"Syntax is as for BNs, but with additional nodes: <ul> <li>Boxes for decisions</li> <li>Diamonds for utilities</li> <li>There must be a directed path tying all decisions together</li> <li>Utility nodes have no children</li> <li>Decision nodes have finite set of states (representing decision alternatives)</li> <li>Utilities do not have states</li> </ul>"
},

{
   "id":"14",
   "question":"Hvilke tre typer noder består et beslutningsnettverk (decision network, influence diagram) av? Og hva representerer de?",
   "answer":"Sjansenoder (ovale) representerer variable/parametere, som standardnodene i et Bayesiansk nett. Beslutningsnoder (rette rektangler) representerer beslutningspunkter, der valg av neste aksjon gjøres. Nyttbarhetsnoder (vridde [rektangler, ala diamant]), også kalt verdinoder representerer nytteverdier og er et resultat av utfallet av alle sjansenoder som direkte influerer nytten (og ikke andre sjansenoder) EQ: Research on Artificial Neural Networks is partly motivated by knowledge about how the brain works. Explain this relation. The brain is made up by many, many, tiny neurons. These are “triggered” by recieving more than a treshold value of activation from the nodes it is connected to. Artificial Neural Networks are based on this. The reason, is the compelling properties the brain has. It can learn, it is adaptable to different situations and it is computing parallelly."
},

{
   "id":"15",
   "question":"Hva er «overfitting» (overtilpasning)?",
   "answer":"3. Overtilpasning betyr at en hypotese h1 tilpasser treningsdataene med mindre fil enn en annen hypotese h2, mens h2 er best på NYE data. Da sier vi at h1 overtilpasser (treningsdataene)."
},

{
   "id":"16",
   "question":"Explain the syntax of a decision tree",
   "answer":"Each internal node tests an attribute. Each branch corresponds to attribute value. Each leaf node assigns a classification."
},

{
   "id":"17",
   "question":"Gi en uformell beskrivelse av læringsalgoritmen ID3 for et beslutningstre.",
   "answer":"Top-down groing av beslutningstre. I hver runde splitter man en løvnode ved å introdusere en ny variabel. Hvilken variabel som introduseres bestemmes ved dens ”godhet”, noe som for ID3 bestemmes ved Shannon entropi. Rekursjonen stopper dersom i) det ikke er flere eksempel igjen; ii) hvis alle eksemplene er i samme klasse; iii) Det ikke er flere attributter."
},

{
   "id":"18",
   "question":"Why would an agent want to learn?",
   "answer":"Learning modifies the agent's decision mechanisms to improve performance; Learning is essential for unknown environments, i.e., when designer lacks omniscience; Learning is useful as a system construction method, i.e., expose the agent to reality rather that trying to write it down"
},

{
   "id":"19",
   "question":"Nevn alle de tre hovedtypene tilbakemelding som man kan lære fra, og beskriv dem kort.",
   "answer":"<ul><li>Supervised learning: Man har et trenings- og testsett, slik at agenten får se både en haug oppgaver og fasitsvar før den får prøve seg på den virkelige verden.</li> <li>Unsupervised learning: Lære seg pattern i input, uten å få explisitt tilbakemelding.</li> <li>Reinforcement learning: Blir gitt gulrot eller pisk etterhvert som den gjør ting. F.eks. kan det være minuspoeng for å tape i et spill eller plusspoeng for å vinne.</li> <li>(Semi-supervised learning): En kombinasjon av supervised og unsupervised, hvor agenten typisk får litt data som er lablet (gitt fasit), og masse uten.</li> </ul>"
},

{
   "id":"20",
   "question":"What are the main reasons for letting an agent learn from its environment (as opposed to hardcode all the agent’s reasoning by hand)?",
   "answer":"The following three reasons are mentioned in the book, it is also good if you come up with additional (relevant) reasons for learning, too. <ul><li>Essential for unknown domains</li> <li>Important in “changing” environments</li> <li>Useful system construction method in its own right (due to “laziness” of constructor)</li></ul>"
},

{
   "id":"21",
   "question":"Describe the DT learning algorithm informally. What is Occam’s razor, how does it come into play when learning decision trees?",
   "answer":"Decision Trees are learned Top-Down, and it is a recursive learning technique. The pseudo-code’ish description here shows the poorest level of detail you can get away with at the examination; it is not ready-to-implement, as you can see. If you want to, you are free to make more formal descriptions, and this is something you will get paid for – but only up to a point.<br /> Algorithm: <ol> <li>Use all relevant data to find which attribute you want to split on. Call this attribute best</li> <li>Make one leaf for each of the values <best> can take.</li> <li>For each leaf i: Restrict the data so that you only use data where <best> = <i>; if there is only one class in this restricted set, make a leaf node labelled by that class, otherwise go to 1 with the restricted dataset, and create a new tree below the link.</li> </ol><br /><br /> Occams razor says that you should not complicate what can be done easily, or in our case: There is no reason for making complex decision trees when smaller ones will perform equally well. This is a very important insight, in particular, as it will help you to avoid overfitting<br />In our case, Occam’s razor is relevant when it comes to choosing the “best” attribute. In ID3, the learning algorithm we used which calculates entropy and all that, the point is that we want a heuristic that biases towards SHORT DECISION TREEES, i.e., in accordance with Occam."
},

{
   "id":"22",
   "question":"Gradient descent is a powerful, general-purpose algorithm, which amongst other things can be used for learning the weights of a perceptron network. Describe the main steps, and the strengths and weaknesses of the learning algorithm",
   "answer":"Gradient Descent is a general-purpose learning algorithm for optimization in a CONTINUOUS search space. The requirement here is that we for any position in the search (set of weights in the perceptron) can calculate the GRADIENT of the function we try to minimize (typically a penalty function or an error function).<br /><br /> Algorithm:<br /> 1. Start at a random position<br /> 2. Move a small step in the direction of steepest descent (in the direction opposite to the gradient). The length of the step is proportional to the length of the gradient vector.<br /> 3. As long as the gradient is not zero, go to 2<br /><br /> Pros: Simple to implement, typically reasonably fast, often gives good results, only one parameter (step size)<br /> Cons: Can be stuck in local minima, can be very slow, can be difficult to find good value of stepsize (although one will typically use 5% rather blindly), requires that we are able to calculate the gradient"
},

{
   "id":"23",
   "question":"Information Retrieval systems are typically evaluated using two criteria. Define the two criteria. Why is it insufficient to use only one of them to evaluate an IR system?",
   "answer":"Strong AI is hypothetical artificial intelligence that match or exceedes human intelligence. The Strong AI hypothesis is that this is possible, while the weak AI says it doesn’t (but instead asks whether or not a machine can act intelligent). Nowadays, as Russel and Norvig puts it, researchers take the weak AI hypothesis for granted, and doesn’t care about the strong one”."
},

{
   "id":"24",
   "question":"What is The Strong AI Hypothesis, and what is The Weak AI Hypothesis?",
   "answer":"The Strong AI hypothesis asks (and believes) that artificial intelligence is possible. That machines can be intelligent, while Weak AI is concered about whether or not machines can act intelligent (and discards the beeing-part)."
},

{
   "id":"25",
   "question":"What is The Chinese Room, and how is The Chinese Room used to argue against the Strong AI hypothesis?",
   "answer":"The Chinese room is a thought experiment with a man inside a closed room (like a CPU in a machine), that recieves notes/questions in chinese. The man himself doesn’t speak or understand chineese, but responds to the queries by looking up in a book which tells him how to respond. For the reciever of the note it will look like the machine-man acts intelligently, while he doesn’t really understand anything. The chineese room is used as an argument against strong-AI, but has been much criticised (and praised)."
},

{
   "id":"26",
   "question":"What is “The Turing Test”, and how does it relate to the term “Artificial Intelligence”?",
   "answer":"Basic setup for the Turing Test: <ul> <li>Interrogator in one room, human in another, system in a third. Interrogator asks questions; human and system answer</li> <li>After 5 minutes of discussion, the Interrogator tries to guess which is which</li> <li>The system has passed the Turing Test if the Interrogator fails 30% of the time</li> </ul> A discussion about “link to AI” should contain (your) thoughts on whether or not this is a good strategy for proof-of-concept for AI. Paper - Case Based Reasoning"
},

{
   "id":"27",
   "question":"Case-basert resonnering kan ses på som en metode for integrert problemløsning og læring. Forklar hvorfor. Bruk gjerne CBR-syklusen (The CBR cycle) som referanse.",
   "answer":"CBR-syklusen integrerer problemløsning (2. trinn) og læring (2. siste trinn). I læringen går det første trinnet (Revise) ut på å evaluere og evt. endre den foreslåtte løsningen før det siste trinnet (Retain) der selve læringen (endringen i kunnskapsbasen) foregår."
},

{
   "id":"28",
   "question":"How does the instance-based reasoning method k-nearest neighbour solve problems? What are the strengths and weaknesses of this method?",
   "answer":"It finds the k nearest neighbour cases in the vector space and assigns the problem instance to the type class of those retrieved neighbours. It is subject to the curse of dimensionality, that it, it becomes worse the more dimension you have, until it’s absolutely useless. However, it’s simple to implement and has strong consistency"
},

{
   "id":"29",
   "question":"Case-baserte læringsmetoder karakteriseres ofte som ”lat læring” (lazy learning), i motsetning til andre læringsmetoder som kalles ”ivrige” (eager learning). Kan du tenke deg hvorfor?",
   "answer":"All læring innebærer en generalisering over observerte instanser. I lat læring lagres kun instansene, mens generaliseringa utsettes (=latskap) til problemløsningsfasen, der den partielle matchingen mellom et nytt og et gammelt case er en implisitt generalisering. Dette i motsetning til ivrige læringsmetoder som generaliserer i læringsfasen."
},

{
   "id":"30",
   "question":"Describe the four steps in the CBR cycle: Give their names, explain what happens in each step, and explain how general domain knowledge is/can be used in each of the steps.",
   "answer":"The four steps in the cycle are:<br /> 1.Retrieve: Choose similar case(s) to the current problem. The new case is typically represented by attribute-value-pairs, and it should be compared with those in the casebase. Domain knowledge can be used to calculate a (knowledge-boosted) similarity between new and old cases. If no knowledge is available, one need to use (“shallow”) statistically based measures.<br /> 2. Reuse: Reuse the solution(s) of the retrieved case(s); this can be the (knowledge intensive) adaption of the solution method or a (knowledge poor) voting of classification results, or solutions in-between.<br /> 3.Revise: Get a revised solution (this step involves the user more than the system)<br /> 4.Retain: Save solved case in case-base if required, update domain knowledge if required<br /><br /> Showing off by making a nice drawing will always be good here. It can also pay off to give a bit deeper description than what I did here, e.g., by using an example or two."
},

];