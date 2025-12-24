import React, { useState, useRef, useEffect } from 'react';

// Amoila Cesar AI Coach Prototype
// This demonstrates the coaching personality and conversation flow

const AmoilaCoachPrototype = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [clientType, setClientType] = useState('general');
  const [isTyping, setIsTyping] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [clientProfile, setClientProfile] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Client personas for demo
  const clientProfiles = {
    athlete: {
      name: "Marcus",
      type: "NBA Player",
      icon: "🏀",
      context: "Professional athlete, in-season training, needs recovery optimization",
      sampleQuestions: [
        "My HRV dropped 15 points today. Should I still do legs?",
        "What should I eat before tomorrow's game?",
        "What's the best warm-up before explosive training?",
        "Give me a power and agility workout",
        "How should I structure my offseason training?"
      ]
    },
    professional: {
      name: "Sarah",
      type: "Tech Executive",
      icon: "💼",
      context: "Busy professional, limited time, high stress, desk job",
      sampleQuestions: [
        "I only have 20 minutes today. What can I do?",
        "Been sitting in meetings all day, my back is killing me",
        "Give me an EMOM workout I can do at home",
        "What are the 6 training elements?",
        "How do I build strength without a gym?"
      ]
    },
    mobility: {
      name: "Robert",
      type: "Active Aging (58)",
      icon: "🧘",
      context: "Focused on mobility, joint health, functional movement",
      sampleQuestions: [
        "My knees hurt when I squat. What should I do instead?",
        "What's a good morning routine for stiffness?",
        "What is primal movement? Can I do it at my age?",
        "How do I build muscle after 50?",
        "Give me a sample full body workout"
      ]
    }
  };

  // Amoila's coaching responses - demonstrating his style
  const getAmoilaResponse = (userMessage, profile) => {
    const msg = userMessage.toLowerCase();
    
    // Recovery/HRV responses (athlete context)
    if (msg.includes('hrv') || msg.includes('recovery')) {
      return `Listen, your body is talking to you right now. A 15-point drop? That's not a suggestion—that's your nervous system saying "hey, I need some love today."

Here's what we're gonna do: We're NOT skipping the workout. But we ARE being smart about it. Today becomes a nervous system reset day.

**Your Modified Plan:**
- 10 min foam rolling (focus on those hip flexors and quads)
- 20 min mobility flow—nothing that spikes your heart rate
- Light activation work only—no heavy loading

Trust the process. One day of smart training beats three days of recovery from overdoing it. Your pace. Your race. 💪

How's your sleep been this week?`;
    }

    // Time-crunched responses (professional context)
    if (msg.includes('20 minutes') || msg.includes('only have') || msg.includes('limited time')) {
      return `20 minutes? That's all I need. Let's get it!

Here's your power session—no equipment, maximum impact:

**The 20-Minute Burner:**
- 2 min: World's Greatest Stretch (wake up that whole body)
- 4 rounds of:
  - 40 sec Push-ups (modify as needed)
  - 20 sec Rest
  - 40 sec Reverse Lunges (alternate legs)
  - 20 sec Rest
  - 40 sec Plank Hold
  - 20 sec Rest
- 3 min: Cool down stretches

That's functional fitness right there. You're not just building "show muscles"—you're building a body that WORKS for your life.

Now go handle your business. Let's GO! 🔥`;
    }

    // Pain/mobility responses (aging client context)
    if (msg.includes('knees hurt') || msg.includes('pain') || msg.includes('stiff')) {
      return `First things first—pain is information, not punishment. Your body isn't broken, it's just asking for a different approach.

Here's the thing about knee discomfort during squats: 9 times out of 10, it's not actually a knee problem. It's usually tight hips, weak glutes, or ankle mobility limiting you.

**What we're doing instead:**
1. **Box Squats** - Sit back to a surface, takes pressure off the knees
2. **Goblet Squats to a Target** - Forces better form and depth control
3. **Step-Ups** - Single leg work that builds stability

But before any of that? We're spending 5 minutes on hip circles, ankle mobility, and glute activation. That's non-negotiable.

You DESERVE a body that moves well and feels good. We're gonna get you there—YOUR pace, YOUR race.

Want me to walk you through the warm-up sequence?`;
    }

    // Consistency/motivation responses
    if (msg.includes('consistent') || msg.includes('motivation') || msg.includes('schedule')) {
      return `Real talk: I don't believe in motivation. Motivation is like a wave—it comes and goes. What I believe in is COMMITMENT.

Here's what I tell my NBA guys, my CEOs, everyone: You don't need an hour. You don't need the perfect gym. You need 10 minutes and a decision.

**The Non-Negotiable Rule:**
Commit to 10 minutes. That's it. Every single day, no matter what. Some days that 10 minutes turns into 45. Other days, it's exactly 10. Both are wins.

Your body doesn't care about perfect schedules. It cares about consistency over time. That's how we build a body and life you love.

What time of day works best for you? Let's anchor that 10 minutes somewhere real.`;
    }

    // Back pain/desk job responses
    if (msg.includes('back') || msg.includes('sitting') || msg.includes('desk')) {
      return `All-day meetings and your back is screaming? I hear you. That's your body saying it needs to MOVE.

Here's your immediate relief protocol—do this right now:

**The Desk Reset (5 minutes):**
1. **Cat-Cow** - 10 reps, slow and controlled (even in your chair works)
2. **Seated Spinal Twist** - 30 seconds each side
3. **Standing Hip Flexor Stretch** - 30 seconds each side (use your desk for balance)
4. **Wall Angels** - 10 reps (opens up that chest)
5. **Glute Bridges** - 10 reps (wake up those glutes that have been sleeping all day)

And here's the real game changer: Set a timer for every 45 minutes. Stand up, do 10 squats, sit back down. Your spine will thank you.

Movement is medicine. Little doses throughout the day beat one big workout after 10 hours of sitting.

How you feeling now?`;
    }

    // Nutrition responses
    if (msg.includes('eat') || msg.includes('food') || msg.includes('nutrition') || msg.includes('meal') || msg.includes('diet')) {
      if (msg.includes('game') || msg.includes('before') || msg.includes('pre-game') || msg.includes('performance')) {
        return `Nutrition is where the magic happens OUTSIDE the gym. Your training is the stimulus—food is the recovery.

**Pre-Game Fuel (3-4 hours before):**
- Complex carbs: Sweet potato, rice, oatmeal
- Lean protein: Chicken, eggs (I'd skip the fish—not my thing anyway 😄)
- Keep fats moderate—they slow digestion

**2 Hours Before:**
- Lighter: Banana with almond butter, or a small smoothie
- Hydrate but don't overdo it

**Post-Game Recovery:**
- Protein within 45 minutes (30-40g)
- Carbs to replenish what you burned
- Hydration with electrolytes

Your body is your car and the food is your fuel. You wouldn't put cheap gas in a Ferrari, right?

What does your current pre-game routine look like?`;
      }
      return `Real talk on nutrition—I'm gonna keep it simple because that's what works.

**My Core Principles:**
- Eat as organic as possible
- More plant-based, more alkaline foods
- Drink LOTS of water—I'm talking citrus water, lemon water throughout the day
- No dairy, no milk, limit the alcohol

Here's the thing though—I don't believe in one-size-fits-all diets. Your nutrition has to fit YOUR lifestyle. What works for my NBA guys is different from what works for a busy executive or someone focused on longevity.

**The Non-Negotiables:**
1. Structure your meals like you structure your conference calls—plan them, don't just wing it
2. Your body is your car, food is your fuel. Treat it that way.
3. Sunday is meal prep day. Use it to set yourself up for the week.

I love Mediterranean food, Jamaican food, Thai—eating healthy doesn't mean eating boring. It means eating intentional.

What's your current eating looking like? Let's figure out what adjustments make sense for YOUR life.`;
    }

    // Morning routine responses
    if (msg.includes('morning') || msg.includes('routine') || msg.includes('wake up')) {
      return `Morning movement is my secret weapon. It's how we upgrade the software—mind, body, AND spirit.

**Amoila's Morning Flow (10-15 min):**

1. **Before you even get out of bed:**
   - 10 deep breaths (box breathing: 4 in, 4 hold, 4 out, 4 hold)
   - Gentle full-body stretch while lying down

2. **On the floor:**
   - Cat-Cow: 10 reps
   - Hip Circles: 10 each direction
   - Thoracic rotations: 5 each side

3. **Standing:**
   - World's Greatest Stretch: 3 each side
   - Arm circles: 10 forward, 10 back
   - Bodyweight squats: 10 reps

This isn't about intensity. This is about telling your body "we're awake, we're alive, we're ready to move."

Do this for 7 days straight and tell me you don't feel like a different person. Trust the process! 🙌`;
    }

    // Default engaging response
    return `I hear you. That's exactly the kind of thing we need to work through together.

Here's what I know: You showed up. You're asking questions. That already puts you ahead of most people who just stay stuck.

My approach is simple—we meet you exactly where you are. Whether you're an NBA athlete or someone just getting started, the fundamentals don't change: Move well. Move often. Build a body that serves your life.

Tell me more about what you're dealing with. What's the biggest obstacle standing between you and where you want to be?

We're ONE squad, ONE team, ONE community. And I've got you. 💪`;
  };

  // Additional response handlers for new topics
  const getExtendedResponse = (msg) => {
    // Meal prep responses
    if (msg.includes('meal prep') || msg.includes('prep') && msg.includes('meal')) {
      return `Sunday is sacred. That's your meal prep day—non-negotiable.

Here's how I tell my busy clients to approach it:

**The 2-Hour Sunday Setup:**
1. **Pick 2-3 proteins** - Grill chicken, bake salmon, prep ground turkey
2. **Roast a big batch of veggies** - Sweet potatoes, broccoli, peppers
3. **Cook your grains** - Rice, quinoa, whatever you like
4. **Portion it out** - Glass containers, grab-and-go ready

That's it. Now Monday through Friday, you're just assembling, not cooking from scratch.

**Pro tips:**
- Keep it simple. You don't need 7 different meals—3-4 options is plenty
- Prep your breakfast too. Overnight oats, egg muffins, smoothie packs
- Always have healthy snacks ready—nuts, fruit, cut veggies

Structure your meals like you structure your conference calls. Plan them, don't wing them.

What's your Sunday currently look like?`;
    }

    // Stress eating responses
    if (msg.includes('stress') && (msg.includes('eat') || msg.includes('food')) || msg.includes('emotional eating')) {
      return `I hear you. Stress eating isn't about willpower—it's about your nervous system looking for relief.

Here's what I've learned training everyone from CEOs to pro athletes: When stress hits, your body wants comfort. That's biology, not weakness.

**The Pattern Interrupt:**
1. When the urge hits, PAUSE. Take 5 deep breaths.
2. Ask yourself: Am I hungry or am I stressed?
3. If stressed: Move your body for 5 minutes. Walk, stretch, anything.

**The Environment Fix:**
- Don't keep trigger foods in the house. That's not about discipline—that's about design.
- Keep healthy options visible and accessible
- Hydrate first—thirst often disguises itself as hunger

**The Real Work:**
- What's actually stressing you out? Let's address that.
- Sleep affects cravings more than most people realize
- Movement is medicine for stress—even 10 minutes changes your brain chemistry

This isn't about perfection. It's about building awareness and better patterns over time.

What's usually triggering the stress eating for you?`;
    }

    // Hydration responses
    if (msg.includes('hydrat') || msg.includes('water') || msg.includes('drink')) {
      return `Hydration is foundational. I drink water ALL day long—citrus water, lemon water, just keeping it flowing.

**The Formula:**
Take your body weight, divide by 2—that's roughly how many ounces you need daily as a baseline. More if you're training hard.

**For Game Days/Heavy Training:**
- Start hydrating the day BEFORE, not the morning of
- Add electrolytes—sodium, potassium, magnesium matter
- Sip consistently, don't chug

**My Daily Approach:**
- Glass of water first thing in the morning, before anything else
- Lemon or citrus water throughout the day
- Water bottle always visible, always within reach
- Check your urine—pale yellow is the goal

**Signs You're Dehydrated:**
- Fatigue (often mistaken for needing caffeine)
- Headaches
- Decreased performance
- Muscle cramps

Your muscles are 75% water. Your brain is 73% water. Dehydration affects EVERYTHING—mood, focus, performance, recovery.

How much are you currently drinking?`;
    }

    // Joint health/inflammation responses
    if (msg.includes('joint') || msg.includes('inflamm') || msg.includes('arthritis')) {
      return `Joint health is about more than just one thing—it's the combination of what you eat, how you move, and how you recover.

**Anti-Inflammatory Eating:**
- More plants, more color on your plate
- Omega-3s: Fatty fish (if you eat it—I personally skip seafood), walnuts, flaxseed
- Turmeric and ginger—nature's anti-inflammatories
- Cut back on processed foods and refined sugars—they feed inflammation

**What to Limit:**
- Dairy (I recommend cutting it completely)
- Alcohol
- Refined carbs and sugars
- Processed oils

**The Movement Side:**
- Keep moving! Joints need motion to stay healthy
- Low-impact options: Swimming, cycling, walking
- Daily mobility work—10 minutes minimum
- Strength training protects joints by building the muscles around them

**Hydration Matters Here Too:**
- Your cartilage needs water to stay cushioned
- Dehydration makes joint issues worse

This is the whole-body approach. You can't out-supplement a bad diet, and you can't eat your way out of not moving.

What specific joints are giving you trouble?`;
    }

    // Protein for aging clients
    if (msg.includes('protein') && (msg.includes('age') || msg.includes('older') || msg.includes('58') || msg.includes('60'))) {
      return `Great question, and it's one a lot of people get wrong. As we get older, we actually need MORE protein, not less.

**The Science:**
After 40, we start losing muscle mass every year if we're not intentional about fighting it. This is called sarcopenia. Protein + resistance training is your defense.

**The Numbers:**
For active adults over 50, aim for 0.7-1.0 grams of protein per pound of body weight. That's higher than the general recommendation—because building and maintaining muscle gets harder.

**Practical Application:**
- Protein at EVERY meal, not just dinner
- 25-40 grams per meal is a good target
- Don't forget post-workout—this is when your muscles need it most

**Good Sources:**
- Eggs (one of nature's most complete proteins)
- Chicken, turkey, lean meats
- Greek yogurt (if you tolerate dairy—I personally skip it)
- Legumes, lentils, beans
- Protein shakes can help if you're struggling to hit your numbers

**The Key Insight:**
As we age, our body becomes less efficient at using protein. So we need more of it, spread throughout the day, to get the same benefit.

You're asking the right questions. That's how we build a body that serves you for decades to come.

What does your typical protein intake look like right now?`;
    }

    // Sleep responses
    if (msg.includes('sleep') || msg.includes('tired') || msg.includes('insomnia') || msg.includes('rest')) {
      return `Sleep is where the magic happens. You can train hard, eat clean, but if you're not sleeping—you're leaving results on the table.

**My Sleep Protocol:**

**Environment:**
- Room temperature: Cool, around 65-68°F
- Blackout curtains or sleep mask—total darkness
- Phone OUT of the bedroom or on airplane mode

**The Wind-Down (60-90 min before bed):**
- No screens. Blue light kills melatonin.
- Dim the lights in your space
- Read, stretch, journal—calm the nervous system
- No heavy meals within 2-3 hours of bedtime

**The Routine:**
- Same bedtime, same wake time—even weekends
- Morning sunlight exposure helps set your circadian rhythm
- No caffeine after 2pm

**What Sleep Does:**
- Muscle recovery and growth hormone release
- Memory consolidation
- Immune system reset
- Emotional regulation

Your HRV, your recovery scores, your performance—they all start with sleep. This isn't optional, it's foundational.

I've seen athletes and executives completely transform just by prioritizing sleep. It's that powerful.

What time are you usually getting to bed?`;
    }

    // Alcohol responses
    if (msg.includes('alcohol') || msg.includes('drink') && (msg.includes('beer') || msg.includes('wine') || msg.includes('cocktail'))) {
      return `I'm gonna keep it real with you—no alcohol is one of my consistent recommendations across all my clients.

**Here's Why:**
- Alcohol disrupts sleep quality, even if it helps you fall asleep
- It impairs recovery and muscle protein synthesis
- Dehydrates you
- Empty calories that don't fuel anything productive
- Affects hormone balance

**The Reality Check:**
I'm not saying you can never have a drink at a celebration. I'm saying if your goals are serious, alcohol isn't helping you get there.

**If You Do Drink:**
- Moderation is key—one drink, not five
- Hydrate extra before and after
- Don't drink close to training or on recovery days
- Know that your sleep that night will be compromised

I've worked with pro athletes who cut alcohol completely during the season. Their recovery, their HRV, their performance—all improved. It's not a coincidence.

At the end of the day, it's your choice. But be honest with yourself about the trade-offs.

What's your current relationship with alcohol looking like?`;
    }

    // Warm-up responses
    if (msg.includes('warm') && msg.includes('up') || msg.includes('warmup') || msg.includes('before workout') || msg.includes('activate')) {
      return `The warm-up is NON-NEGOTIABLE. This is where I see most people cut corners—and it's exactly where injuries happen.

In my programs, every workout starts with 8-15 minutes of active warm-up. This isn't just stretching—you're going to break a sweat. Your muscles need to be warm and your body needs to be properly ACTIVATED for the work to come.

**Amoila's Warm-Up Blueprint:**

**Phase 1: Wake Up the System (3-4 min)**
- Light cardio: Jog in place, jumping jacks, high knees
- Get that heart rate up and blood flowing

**Phase 2: Dynamic Movement (4-5 min)**
- Hip circles: 10 each direction
- Leg swings: Front-to-back and side-to-side
- Arm circles: Small to large, both directions
- Thoracic rotations: Open up that upper back
- World's Greatest Stretch: 3-5 each side

**Phase 3: Muscle Activation (3-4 min)**
- Glute bridges: 10 reps (wake up those glutes!)
- Band walks or clamshells if you have bands
- Plank hold: 30 seconds
- Cat-cow: 10 reps

**Phase 4: Movement Prep (2-3 min)**
- Practice lighter versions of your main lifts
- Get the movement pattern grooved before adding load

This isn't optional—it's how we prevent injuries and maximize your workout. Your muscles perform better when they're warm and activated.

What workout are you warming up for?`;
    }

    // Mobility and flexibility responses
    if (msg.includes('mobil') || msg.includes('flexib') || msg.includes('tight') || msg.includes('stretch') || msg.includes('stiff')) {
      return `Mobility is the secret weapon. I've seen it transform my NBA guys, my CEOs, everyone. If you can't move well, you can't train well—and you definitely can't perform in life.

**Why Mobility Matters:**
- Increased range of motion = more strength expression
- Better movement quality = fewer injuries
- Joint health = longevity in training

**My Primal Movement Approach:**

I teach what I call the ABCs of primal movement: **Ape, Beast, and Crab**. These are ground-based, bodyweight flows that open up your body and build stability.

**Daily Mobility Flow (10-15 min):**

1. **Seated Cat-Cow** - 10 reps, connect breath to movement
2. **90-90 Hip Stretch** - 30 sec each side, open those hips
3. **Thoracic Rotations** - 5 each side, unlock the upper back
4. **Deep Squat Hold** - 30-60 seconds, sit in it
5. **World's Greatest Stretch** - 3 each side, hits everything
6. **Loaded Beast to Downward Dog** - Flow between positions
7. **Hip Circles on All Fours** - 10 each direction

**Recovery Day Focus:**
In my 645 program, we have a dedicated Mobility & Stability day each week. Three key areas:
- Joint Mobilization
- Primal Movement Activation  
- Full Body Foam Rolling

Movement is medicine. The more consistently you work on mobility, the lighter and more agile you'll feel. Trust the process!

What areas feel the tightest for you?`;
    }

    // Primal movement responses
    if (msg.includes('primal') || msg.includes('animal flow') || msg.includes('ape') || msg.includes('beast') || msg.includes('crab')) {
      return `You're asking about my favorite thing! Primal movement is what I built CHOP WOOD CARRY WATER around—it's ground-based, bodyweight movement where you flow from one position to another.

**The ABCs of Primal Movement:**

**APE** 🦍
- Deep squat position, hands on ground
- Move forward, backward, laterally
- Opens hips, builds leg strength

**BEAST** 🐻
- On all fours, knees hovering just off the ground
- Core engaged, shoulders stable
- Move in any direction while maintaining position

**CRAB** 🦀
- Belly up, hands and feet on ground
- Hips lifted, chest open
- Underswitches and kick-throughs from here

**Why This Works:**
- Builds stability through your whole body
- Improves coordination and body awareness
- Opens up joints without static stretching
- It's like movement meditation—requires focus

**Sample Primal Flow:**
1. Start in Beast position (10 sec hold)
2. Underswitch to Crab
3. Kick-through
4. Return to Beast
5. Step forward into Ape
6. Walk out to plank, flow to Cobra
7. Push back to Beast

After three years of this practice, I feel more connected to my body than ever. Better focus, better clarity, better movement. This is what I call the fountain of youth.

Want me to break down any of these movements in more detail?`;
    }

    // Foam rolling responses
    if (msg.includes('foam roll') || msg.includes('roller') || msg.includes('recovery') && msg.includes('tool')) {
      return `Foam rolling is part of my recovery toolkit. In CHOP WOOD CARRY WATER, I include a full body foam rolling session as one of the recovery workouts.

**Why Foam Roll:**
- Releases muscle tension and knots
- Improves blood flow to tissues
- Helps with recovery between workouts
- Can reduce muscle soreness

**Full Body Foam Rolling Protocol:**

**Lower Body (5-7 min):**
- Calves: 30 sec each leg, rotate foot in/out
- Hamstrings: 30 sec each leg
- Quads: 30 sec each leg
- IT Band: 30 sec each side (go slow!)
- Glutes: 30 sec each side, cross ankle over knee

**Upper Body (3-5 min):**
- Upper back: Roll from mid-back to shoulders
- Lats: Side-lying, arm extended
- Chest/shoulders: Use a ball against a wall

**Key Tips:**
- Slow down—this isn't a race
- When you find a tender spot, PAUSE on it
- Breathe through the discomfort
- Avoid rolling directly on joints or bones

**When to Foam Roll:**
- Before workout: Quick pass to warm up tissues
- After workout: Deeper work on muscles you trained
- Rest days: Full body session for recovery

This is one of those things that feels uncomfortable in the moment but pays off big time. Your body will thank you.

What areas need the most attention for you?`;
    }

    // Six training elements
    if (msg.includes('training element') || msg.includes('6 element') || msg.includes('six element') || (msg.includes('what') && msg.includes('train') && msg.includes('for'))) {
      return `Great question! My training philosophy is built on SIX training elements. This is what I use with my NBA guys, my celebrity clients, everyone:

**THE 6 TRAINING ELEMENTS:**

**1. STRENGTH 💪**
Building raw power through compound lifts. Think squats, deadlifts, presses. This is your foundation—functional strength that translates to real life.

**2. HYPERTROPHY 🏋️**
Muscle building through time under tension. We use tempo training—slow and controlled—to maximize that muscle growth stimulus. This isn't about ego lifting, it's about muscle WORK.

**3. ENDURANCE 🔥**
Cardiovascular conditioning that keeps you going. Heart-pounding circuits that leave no muscle untouched. This is about building a gas tank that doesn't quit.

**4. POWER ⚡**
Explosive strength—the ability to generate force FAST. Plyometrics, explosive movements, athletic training. Power is what separates athletes from gym-goers.

**5. AGILITY 🏃**
Multidirectional speed. Learning to move, stop, change directions, land correctly. This is functional—it keeps you safe on the court, on the street, in life.

**6. MOBILITY 🧘**
Range of motion and joint health. You can't have true strength and power without mobility. This is your longevity play.

In my programs like 645 and THE WORK, we hit ALL of these elements throughout the week. That's how you build a complete athlete—not just show muscles, but a body that WORKS.

Which element do you want to focus on?`;
    }

    // Strength training responses
    if (msg.includes('strength') && (msg.includes('train') || msg.includes('build') || msg.includes('workout'))) {
      return `Strength is the FOUNDATION. Everything else builds on top of it.

**My Strength Training Philosophy:**

We're building FUNCTIONAL strength—not just gym strength, but real-world power. You should be able to sprint after your kid, carry all the groceries in one trip, move furniture without throwing out your back.

**Strength Workout Structure:**
- Compound movements first (squats, deadlifts, presses)
- 3-4 sets per exercise
- 6-10 rep range for strength building
- Rest 60-90 seconds between sets
- Focus on FORM over weight

**Key Strength Moves:**
- Goblet Squat / Back Squat
- Romanian Deadlift / Conventional Deadlift
- Dumbbell Press / Bench Press
- Bent Over Row
- Overhead Press
- Lunges (forward, reverse, lateral)

**Tempo Matters:**
In 645, we use tempo training—controlling both the lifting (concentric) and lowering (eccentric) phases. Try 3-1-3: 3 seconds down, 1 second pause, 3 seconds up. That time under tension is a GAME CHANGER for muscle growth.

**Pro Tip:**
"The better your form, the better your results." I say it constantly because it's true. Perfect your form at lighter weights before you go heavy. Ego lifting leads to injury, not gains.

What are your current strength training goals?`;
    }

    // Hypertrophy responses
    if (msg.includes('hypertrophy') || msg.includes('muscle') && (msg.includes('build') || msg.includes('grow') || msg.includes('gain'))) {
      return `You want to build muscle? Let's talk HYPERTROPHY.

**The Science:**
Hypertrophy is all about TIME UNDER TENSION. Your muscles need to work hard and work LONG to trigger growth. That's why tempo training is so powerful.

**My Hypertrophy Approach:**

**Rep Range:** 8-12 reps (the sweet spot for muscle growth)

**Tempo Training:**
This is where the magic happens. We vary the lifting pace to maximize the challenge:
- **Eccentric Focus:** Slow on the way down (3-4 seconds)
- **Isometric Holds:** Pause at the bottom or midpoint
- **Controlled Concentric:** No swinging, no momentum

**Full Body Tempo Workout Structure:**
In THE WORK, we have dedicated Full Body Tempo days—slow, controlled movements that increase time under tension. Your muscles will BURN but that's when growth happens.

**Key Principles:**
1. Progressive overload—gradually increase weight or reps
2. Mind-muscle connection—FEEL the muscle working
3. Don't rush—quality reps over quantity
4. Adequate rest between sessions (48-72 hrs per muscle group)

**Nutrition for Hypertrophy:**
You can't build a house without bricks. You need:
- Adequate protein (0.7-1g per pound bodyweight)
- Caloric surplus (slight)
- Quality carbs for training fuel

Building muscle takes patience. Trust the process! 💪

What muscle groups are you trying to develop?`;
    }

    // Power training responses
    if (msg.includes('power') || msg.includes('explosive') || msg.includes('plyometric')) {
      return `Power is what separates ATHLETES from gym-goers. It's about generating force FAST.

**Power = Strength × Speed**

You can be strong, but if you can't apply that strength quickly, you're leaving performance on the table.

**Power Training Methods:**

**1. Plyometrics:**
- Box jumps
- Broad jumps
- Plyo push-ups
- Skater jumps
- Depth drops (learn to land!)

**2. Olympic Lift Variations:**
- Power cleans
- Hang snatches
- Push press
- Kettlebell swings

**3. Medicine Ball Work:**
- Rotational throws
- Chest passes
- Overhead slams
- Wall balls

**Strength & Power Workout (from THE WORK):**
We combine resistance training with plyometric exercises—a strength move followed by an explosive move targeting the same muscles. This teaches your body to APPLY the strength you've built.

Example superset:
- Goblet squat (strength) → Box jump (power)
- Dumbbell press (strength) → Plyo push-up (power)

**Key Coaching Points:**
- Quality over quantity—power training isn't about fatigue
- Full recovery between sets (2-3 min)
- Stop when form breaks down
- Land SOFT—learn to decelerate

For my NBA guys, power training is essential. It's what helps them explode off the floor, change directions, finish through contact.

What's your sport or activity you're training for?`;
    }

    // Endurance/cardio responses
    if (msg.includes('endurance') || msg.includes('cardio') || msg.includes('conditioning') || msg.includes('stamina')) {
      return `Endurance is about building a gas tank that NEVER QUITS.

**My Cardio Philosophy:**
I'll be honest—cardio isn't my favorite. But it's ESSENTIAL. In 645, Saturday is Cardio 45—a high-energy session that builds multidirectional speed and agility.

**Endurance & Agility Workout Structure:**

**Heart-Pumping Circuits:**
- 45-60 second work intervals
- Minimal rest between exercises
- Full body engagement
- Functional movements (not just running in place)

**My Favorite Cardio Moves:**
- High knees with arm drive
- Skater jumps
- Mountain climbers
- Burpees (love to hate 'em)
- Speed squats
- Cross-body toe touches
- Soccer taps

**Why Functional Cardio > Treadmill:**
We're not just building your engine—we're training your body to MOVE in all directions. Quick bursts, lateral movement, learning to fall and change directions without injury.

**Sample EMOM Cardio Block:**
Every Minute On the Minute for 12 minutes:
- Minute 1: 15 speed squats
- Minute 2: 10 burpees
- Minute 3: 20 mountain climbers
- Minute 4: 15 skater jumps
(Repeat 3x)

**Cardio & Core (from THE WORK):**
Agility drills, plyometric moves, and core work that will have your heart pounding and sweat pouring. You're burning fat, building speed, and sculpting that six-pack.

What's your current cardio routine looking like?`;
    }

    // Agility responses
    if (msg.includes('agility') || msg.includes('quick') && msg.includes('feet') || msg.includes('lateral') || msg.includes('change direction')) {
      return `Agility is FUNCTIONAL fitness at its finest. This is what keeps you safe in real life.

**Why Agility Matters:**
- Multidirectional speed
- Quick reactions
- Learning to start, stop, and change directions
- Injury prevention

In Performance Academy, we focus heavily on this. The same skills that help athletes accomplish extraordinary feats can help you perform at your peak in everyday life.

**Key Agility Components:**

**1. Deceleration Training:**
Learning to STOP is just as important as learning to go. Depth drops, stick landings, deceleration drills. This protects your knees, ankles, and hips.

**2. Lateral Movement:**
- Lateral shuffles
- Carioca
- Lateral bounds
- Side-to-side hops

**3. Direction Changes:**
- Pro agility drill
- 5-10-5 shuttle
- Cone drills
- Reactive movements

**4. Speed & Coordination:**
- Ladder drills
- Quick feet patterns
- Cross-body movements

**Agility Workout Sample:**
3 rounds:
- Lateral shuffle x 20 yards each way
- Forward/backward sprint x 10 yards
- Skater jumps x 10 each side
- 180° jump turns x 8
- High knee run in place x 30 sec

**Key Coaching Point:**
"Learn to land correctly—this training can literally be what keeps you out of the hospital during the next ice storm."

Stay light on your feet. Stay athletic. That's how we move through life!

What activities do you need agility for?`;
    }

    // EMOM workout responses
    if (msg.includes('emom') || msg.includes('every minute')) {
      return `EMOM—Every Minute On the Minute—is one of my FAVORITE training methods!

**How EMOM Works:**
At the start of each minute, you perform a set number of reps. Whatever time is left in that minute is your rest. Then the next minute starts, and you go again.

**Why EMOM is Effective:**
- Built-in work-to-rest ratios
- Keeps you accountable to the clock
- Ramps heart rate while building strength
- Scalable—adjust reps to your fitness level

**Sample EMOM Workouts:**

**12-Minute Upper Body EMOM:**
- Minute 1: 10 push-ups
- Minute 2: 10 dumbbell rows (each arm)
- Minute 3: 10 dumbbell curls
- Minute 4: 10 tricep dips
(Repeat 3x)

**16-Minute Lower Body EMOM:**
- Minute 1: 12 goblet squats
- Minute 2: 10 Romanian deadlifts
- Minute 3: 10 reverse lunges (each leg)
- Minute 4: 15 glute bridges
(Repeat 4x)

**EMOM Tips:**
- Choose a rep count you can complete in 30-40 seconds
- If you're finishing with only 5 seconds rest, reduce reps
- If you have 30+ seconds rest, add reps or weight
- Stay focused—the clock doesn't wait!

In 645 and CHOP WOOD CARRY WATER, I use 12-minute EMOM circuits a lot. They're efficient, effective, and will get you DRENCHED.

Want me to design a specific EMOM for your goals?`;
    }

    // AMRAP workout responses
    if (msg.includes('amrap') || msg.includes('as many reps') || msg.includes('as many rounds')) {
      return `AMRAP—As Many Reps/Rounds As Possible—is pure WORK.

**How AMRAP Works:**
Set a timer. Complete as many reps or rounds of the given exercises as you can before time runs out. No scheduled rest—you manage your own pacing.

**Why AMRAP Works:**
- Tests your mental AND physical limits
- Great for measuring progress (beat your score next time)
- Efficient—maximum work in minimum time
- Teaches you to push when you're tired

**Sample AMRAP Workouts:**

**8-Minute Total Body AMRAP:**
- 10 air squats
- 8 push-ups
- 6 dumbbell snatches (3 each arm)
- 4 burpees
(Record total rounds + reps)

**12-Minute Upper Body AMRAP:**
- 10 dumbbell presses
- 10 bent over rows
- 10 bicep curls
- 10 tricep extensions
(Record total rounds)

**AMRAP Strategy:**
1. Start at 80% effort—don't blow up in minute 2
2. Find a sustainable pace
3. Short 5-10 second breaks are okay
4. Push harder in the final 2 minutes
5. Write down your score—BEAT IT next time

In CHOP WOOD CARRY WATER, I use 8-minute AMRAP finishers after tempo strength blocks. It's the perfect way to empty the tank!

"Hustle or quit—there's no in-between."

Ready to try one?`;
    }

    // Tempo training responses
    if (msg.includes('tempo') && (msg.includes('train') || msg.includes('lift') || msg.includes('workout'))) {
      return `Tempo training is a SECRET WEAPON for muscle growth and strength gains.

**What is Tempo Training?**
Controlling the speed of each phase of a lift:
- **Eccentric (lowering):** The negative—muscle lengthening
- **Isometric (pause):** The hold—muscle under tension
- **Concentric (lifting):** The positive—muscle shortening

**Common Tempo Notation: 3-1-3**
- 3 seconds lowering
- 1 second pause at bottom
- 3 seconds lifting

**Why Tempo Works:**
- Increases TIME UNDER TENSION (key for hypertrophy)
- Forces you to use proper form
- Builds strength through the full range of motion
- Reduces injury risk (no momentum/swinging)

**Tempo Strength Workout (from CHOP WOOD CARRY WATER):**
First 2 blocks focus on tempo-based exercises:
- Pick compound movements
- Use moderate weight (you won't be able to go as heavy)
- Focus on FEELING the muscle work
- Finish with an 8-min AMRAP

**Sample Tempo Moves:**
- Tempo goblet squat: 3-1-3
- Tempo push-up: 3-2-3
- Tempo RDL: 4-1-2
- Tempo lateral raise: 3-1-3

**Tempo Tips:**
- Start lighter than you think
- Count out loud if needed
- The burn is REAL—embrace it
- Quality reps over quantity

"Train at the speed of your sport—but for hypertrophy, SLOW DOWN."

What lift do you want to apply tempo training to?`;
    }

    // Periodization/deload responses
    if (msg.includes('periodiz') || msg.includes('deload') || msg.includes('stage') || msg.includes('week') && msg.includes('program')) {
      return `Periodization is how we train SMART, not just hard. This is what the pros do.

**What is Periodization?**
Systematically varying your training over time to maximize results and prevent overtraining. We manipulate volume, intensity, and exercise selection through planned phases.

**645 Periodization Structure:**

**13 Weeks, 4 Stages:**

**Stages 1-3 (4 weeks each):**
Each stage follows a weekly pattern:
- Week 1: Foundation—learn the movements
- Week 2: Build—increase intensity
- Week 3: Push—challenge yourself
- Week 4: DELOAD—recover and prepare

**Stage 4 (Week 13):**
Performance Week—go ALL OUT and finish strong!

**What's a Deload Week?**
- Same intensity (weight stays the same)
- Lower volume (fewer sets—2 instead of 3)
- Enhanced recovery
- Prepares you for the next stage

**Why Deload Matters:**
"The goal is to maintain your gains while enhancing your recovery so you can CRUSH the next stage."

Your body adapts during REST, not during work. If you're always redlining, you'll burn out or get injured.

**Weekly Microcycle:**
- 4 days: Full-body strength
- 1 day: Mobility & Stability
- 1 day: Cardio
- 1 day: REST (meal prep, meditate, reframe)

**Signs You Need a Deload:**
- Persistent fatigue
- Decreased performance
- Nagging aches/pains
- Poor sleep
- Lack of motivation

Trust the process. The deload weeks aren't weakness—they're STRATEGY. 🧠

Where are you in your current training cycle?`;
    }

    // THE WORK specific workouts
    if (msg.includes('the work') || msg.includes('push pull') || msg.includes('crucible') || msg.includes('legs day')) {
      return `6 Weeks of THE WORK is my most INTENSE program—modeled after how I train my NBA athletes and celebrity clients.

**36 unique workouts. No repeats. Pure WORK.**

**THE WORK Workout Types:**

**PUSH Day:**
Front of body focus—chest, triceps, quads, shoulders. Pushing exercises that build pressing strength and power.

**PULL Day:**
Back of body—back, biceps, hamstrings. Pulling exercises for a stronger, more powerful posterior chain.

**LEGS Day:**
Lower body BURNER. Weights + agility moves to build strength, power, and definition. Your legs will be talking to you!

**ENDURANCE & AGILITY:**
Heart-pounding, muscle-burning circuit work. No muscle left untouched. This is where we build that gas tank.

**FULL BODY TEMPO:**
Slow, controlled movements. Time under tension for maximum muscle growth stimulus. You'll feel the BURN.

**ISOMETRICS:**
Static holds that optimize muscle recruitment. Low-impact but HIGH intensity. Builds strength and endurance.

**TOTAL BODY PUSH/PULL:**
Best of both worlds—pushing and pulling exercises for balanced full-body strength.

**STRENGTH & POWER:**
Resistance training PLUS plyometrics. This is where athletes are made.

**CARDIO & CORE:**
Agility drills, plyo moves, core work. Heart pounding, sweat pouring, six-pack sculpting.

**THE CRUCIBLE:**
The ultimate test of physical AND mental strength. This is where you prove what you're made of. 🔥

**RANGE & REPAIR:**
Mobility work—hips, t-spine, shoulders, hamstrings, ankles. Recovery is part of the work!

"Hustle or quit—there's no in-between."

Which workout type interests you most?`;
    }

    // Sample workout request
    if (msg.includes('give me') && msg.includes('workout') || msg.includes('sample workout') || msg.includes('workout for today')) {
      return `Let's GO! Here's a workout for you:

**FULL BODY FUNCTIONAL BURNER**
*35-40 minutes | Equipment: Dumbbells*

**WARM-UP (8-10 min):**
- High knees: 30 sec
- Air squats: 30 sec
- Arm circles: 30 sec each direction
- Hip circles: 10 each direction
- World's Greatest Stretch: 5 each side
- Glute bridges: 10 reps
- Plank hold: 30 sec

**BLOCK 1 - STRENGTH (12 min):**
3 rounds:
- Goblet Squat x 10 (tempo: 3-1-2)
- Push-up x 10
- Bent Over Row x 10 each arm
- Reverse Lunge x 8 each leg
*Rest 60 sec between rounds*

**BLOCK 2 - EMOM (8 min):**
Every minute on the minute:
- Min 1: 12 Dumbbell Swings
- Min 2: 10 Squat to Press
- Min 3: 8 Burpees
- Min 4: 10 Renegade Rows
*(Repeat 2x)*

**BLOCK 3 - CORE FINISHER (4 min):**
- Plank: 45 sec
- Dead bug: 30 sec
- Mountain climbers: 30 sec
- Rest: 15 sec
*(Repeat 2x)*

**COOL DOWN (5 min):**
- Deep squat hold: 30 sec
- Hip flexor stretch: 30 sec each
- Figure-4 stretch: 30 sec each
- Cat-cow: 10 reps
- Deep breathing: 1 min

**Your Pace. Your Race.** Modify as needed—the goal is to FINISH strong, not crawl across the line!

How did it go? 💪🔥`;
    }

    return null;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      const msg = userMessage.toLowerCase();
      // First check extended responses for nutrition topics
      const extendedResponse = getExtendedResponse(msg);
      const response = extendedResponse || getAmoilaResponse(userMessage, clientProfiles[clientType]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
  };

  const startChat = (type) => {
    setClientType(type);
    setClientProfile(clientProfiles[type]);
    setShowOnboarding(false);
    setMessages([{
      role: 'assistant',
      content: `What's good, ${clientProfiles[type].name}! 💪

I'm Coach Amoila, and I'm here to help you become the best version of yourself—mind, body, and spirit.

${type === 'athlete' ? "I know the grind of the season. Let's make sure you're recovering smart and training even smarter." : ""}
${type === 'professional' ? "I get it—your schedule is packed. But here's the thing: you don't need hours, you need intention. Let's build something that fits YOUR life." : ""}
${type === 'mobility' ? "Movement is medicine, and it's never too late to feel better in your body. We're going to work together at YOUR pace." : ""}

What's on your mind today? What can I help you with?`
    }]);
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight">COACH AMOILA</h1>
            <p className="text-sm opacity-90">Your AI Performance Coach</p>
          </div>
        </div>

        {/* Onboarding */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Movement is Power.</h2>
              <p className="text-gray-400">Select a demo persona to experience how Coach Amoila adapts to different clients</p>
            </div>

            <div className="space-y-3">
              {Object.entries(clientProfiles).map(([key, profile]) => (
                <button
                  key={key}
                  onClick={() => startChat(key)}
                  className="w-full p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 hover:border-amber-500 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{profile.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{profile.name}</div>
                      <div className="text-amber-500 text-sm">{profile.type}</div>
                      <div className="text-gray-500 text-xs mt-1">{profile.context}</div>
                    </div>
                    <span className="text-gray-600 group-hover:text-amber-500 transition-colors">→</span>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-gray-600 mt-8">
              Prototype Demo • Built for Amoila Cesar
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-3 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-amber-500">
              AC
            </div>
            <div>
              <h1 className="font-bold">Coach Amoila</h1>
              <p className="text-xs opacity-80">Online • Your pace. Your race.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowOnboarding(true)}
            className="text-xs bg-black/20 px-3 py-1 rounded-full hover:bg-black/30"
          >
            Switch Demo
          </button>
        </div>
      </div>

      {/* Client Context Banner */}
      {clientProfile && (
        <div className="bg-zinc-900 border-b border-zinc-800 p-2">
          <div className="max-w-2xl mx-auto flex items-center gap-2 text-sm">
            <span>{clientProfile.icon}</span>
            <span className="text-gray-400">Demo as:</span>
            <span className="text-amber-500 font-medium">{clientProfile.name}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{clientProfile.type}</span>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-amber-600 text-white rounded-br-md'
                    : 'bg-zinc-800 text-white rounded-bl-md'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content.split('\n').map((line, i) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-bold text-amber-400 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>;
                    }
                    if (line.startsWith('- ')) {
                      return <p key={i} className="ml-2">• {line.substring(2)}</p>;
                    }
                    if (line.match(/^\d+\./)) {
                      return <p key={i} className="ml-2">{line}</p>;
                    }
                    return <p key={i} className={line === '' ? 'h-2' : ''}>{line}</p>;
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Questions */}
      {clientProfile && messages.length < 3 && (
        <div className="px-4 py-2 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {clientProfile.sampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickQuestion(q)}
                  className="flex-shrink-0 text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-full border border-zinc-700 hover:border-amber-500 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-zinc-800 bg-zinc-900">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Coach Amoila anything..."
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-amber-500 placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-full font-medium text-sm transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmoilaCoachPrototype;
