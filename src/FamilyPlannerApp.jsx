import React, { useState } from 'react';
import { 
  Calendar, 
  ShoppingCart, 
  Clock, 
  Users, 
  CheckSquare, 
  Square, 
  AlertTriangle, 
  CheckCircle2, 
  Utensils, 
  ChefHat, 
  ShieldAlert, 
  Flame, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function FamilyPlannerApp() {
  const [activeTab, setActiveTab] = useState('meals');
  const [selectedDay, setSelectedDay] = useState('Mon');

  // Grocery state
  const [groceries, setGroceries] = useState([
    { id: 1, name: 'Broccoli (2 heads)', category: 'Produce', checked: false },
    { id: 2, name: 'Pumpkin & Carrots', category: 'Produce', checked: false },
    { id: 3, name: 'Bell Peppers & Potatoes', category: 'Produce', checked: false },
    { id: 4, name: 'Salmon Fillets', category: 'Protein', checked: true },
    { id: 5, name: 'White Fish Fillets (for Steaming)', category: 'Protein', checked: false },
    { id: 6, name: 'Pork Ribs (ABC Soup)', category: 'Protein', checked: false },
    { id: 7, name: 'Frozen Chicken Karaage / Nuggets', category: 'Protein', checked: false },
    { id: 8, name: 'Silken Tofu & Eggs', category: 'Dairy & Eggs', checked: false },
    { id: 9, name: 'Pasta & Noodle Packets', category: 'Pantry', checked: false },
    { id: 10, name: 'Steamed Otah', category: 'Pantry', checked: false },
  ]);

  const toggleGrocery = (id) => {
    setGroceries(groceries.map(g => g.id === id ? { ...g, checked: !g.checked } : g));
  };

  // Weekly Schedule & Meals Data
  const weeklyPlan = {
    Mon: {
      type: 'COOK',
      driver: 'Husband WFH',
      title: 'Steamed Fish & Pumpkin Combo',
      prepTime: '12 mins active',
      items: ['Steamed Fish with Ginger/Soy', 'Steamed Pumpkin', 'Stir-fry Broccoli'],
      sonAdaptation: 'Eats all components directly (no egg/tofu/mushroom involved).',
      kidStatus: 'Son Approved',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    Tue: {
      type: 'BUY',
      driver: 'Parents Pickup (5:30 PM)',
      title: 'Takeout Night (Parents Buy)',
      prepTime: '0 mins',
      items: ['Hainanese Chicken Rice or Roast Pork Rice'],
      sonAdaptation: 'Ensure takeout has no tofu/egg/mushroom side items.',
      kidStatus: 'Easy Buying',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    Wed: {
      type: 'COOK',
      driver: 'User Cooks (Batch Base)',
      title: 'Dual-Base ABC Soup & Noodles',
      prepTime: '10 mins prep, 30 mins simmer',
      items: ['ABC Soup (Pork Ribs, Carrots, Potatoes, Corn)', 'Kids Plain Soup Noodles', 'Adult Packet Soup Addition'],
      sonAdaptation: 'Scoop out carrots, potatoes, meat, and broccoli BEFORE adding any optional mushroom/adult soup packs.',
      kidStatus: 'Requires Split',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    Thu: {
      type: 'COOK',
      driver: 'User WFH',
      title: 'Sheet-Pan Baked Salmon & Airfry Sides',
      prepTime: '10 mins prep',
      items: ['Baked Salmon (Teriyaki / Honey Mustard)', 'Air-fried Potatoes', 'Steamed Otah'],
      sonAdaptation: 'Serve salmon plain or with light teriyaki. Otah for adults.',
      kidStatus: 'Son Approved',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    Fri: {
      type: 'COOK',
      driver: 'Both WFH',
      title: 'Quick Pasta & Air-fryer Karaage',
      prepTime: '15 mins prep',
      items: ['Tomato/Garlic Pasta', 'Air-fryer Frozen Karaage / Nuggets', 'Chicken Bell Pepper Stir-fry'],
      sonAdaptation: 'Karaage acts as zero-prep high-acceptance protein for Son.',
      kidStatus: 'Son Approved',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    Sat: {
      type: 'COOK',
      driver: 'Weekend Routine',
      title: 'Steamed Egg with Tofu + Air-fryer Backup',
      prepTime: '10 mins prep',
      items: ['Steamed Egg with Tofu (2yo & Adults)', 'Air-fryer Fish Fillet (for 5yo)', 'Stir-fry Broccoli'],
      sonAdaptation: 'SON RESTRICTION: Son receives air-fried fish fillet instead of steamed egg/tofu.',
      kidStatus: 'Son Backup Protein',
      statusColor: 'bg-rose-100 text-rose-800 border-rose-300'
    },
    Sun: {
      type: 'COOK',
      driver: 'Weekend Routine',
      title: 'ABC Stir-Fry & Chicken Bell Pepper',
      prepTime: '15 mins prep',
      items: ['ABC Stir-fry with Broccoli', 'Chicken & Bell Pepper Stir-fry'],
      sonAdaptation: 'Keep Son portion separate before adding any jelly-texture items or eggs.',
      kidStatus: 'Son Approved',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    }
  };

  const meltdownWorkflow = [
    { time: '0–3 Min', task: 'Bridge Snack at Door', desc: 'Pre-cut cucumber/broccoli florets immediately upon shoe removal to prevent blood sugar crashes.', tag: 'Urgent' },
    { time: '3–6 Min', task: 'Cold-Start Appliances', desc: 'Turn on steamer or air fryer before changing clothes. Zero stove monitoring needed.', tag: 'Kitchen Prep' },
    { time: '6–15 Min', task: 'Contain & Engage', desc: '5yo sets plastic cutlery. 2yo strapped in high chair with water cup and suction toy.', tag: 'Safety' },
    { time: '15–20 Min', task: 'Plate & Rapid-Cool', desc: 'Drop ice cube into hot soup or spread rice thin. Dinner served by 6:00 PM.', tag: 'Serve' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm tracking-wide uppercase">
            <Sparkles className="w-4 h-4" /> Family Hub Dashboard
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Household Planner & Co-Pilot</h1>
          <p className="text-sm text-slate-500 mt-1">2 Adults (Hybrid WFH) • Son (5yo) • Daughter (2yo)</p>
        </div>

        {/* Dietary Quick Reference */}
        <div className="flex gap-2">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs w-40">
            <div className="font-bold text-amber-900 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" /> Son (5yo)
            </div>
            <p className="text-amber-800 mt-1">🥦 Broccoli yes. NO eggs, tofu, mushrooms, jelly textures.</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs w-40">
            <div className="font-bold text-emerald-900 flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" /> Daughter (2yo)
            </div>
            <p className="text-emerald-800 mt-1">🍳 Loves eggs, tofu, mushrooms, broccoli.</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-5xl mx-auto flex border-b border-slate-200 mb-6 gap-2">
        <button
          onClick={() => setActiveTab('meals')}
          className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors ${
            activeTab === 'meals' 
              ? 'border-amber-500 text-amber-600 bg-amber-50/50 rounded-t-lg' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" /> Weekly Meal Plan
        </button>
        <button
          onClick={() => setActiveTab('groceries')}
          className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors ${
            activeTab === 'groceries' 
              ? 'border-amber-500 text-amber-600 bg-amber-50/50 rounded-t-lg' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShoppingCart className="w-4 h-4" /> Grocery Checklist ({groceries.filter(g => !g.checked).length})
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`flex items-center gap-2 px-5 py-3 font-semibold text-sm border-b-2 transition-colors ${
            activeTab === 'workflow' 
              ? 'border-amber-500 text-amber-600 bg-amber-50/50 rounded-t-lg' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Clock className="w-4 h-4" /> 15-Min Meltdown Protocol
        </button>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto">
        {/* TAB 1: MEAL PLANNER */}
        {activeTab === 'meals' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Days Selection Sidebar */}
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {Object.keys(weeklyPlan).map((day) => {
                const isSelected = selectedDay === day;
                const plan = weeklyPlan[day];
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all min-w-[100px] md:min-w-0 ${
                      isSelected 
                        ? 'bg-amber-500 text-white border-amber-600 shadow-md' 
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">{day}</div>
                      <div className={`text-xs ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>
                        {plan.type === 'BUY' ? '🛒 Buy Dinner' : '👨‍🍳 Cook'}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 hidden md:block ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Meal Detail View */}
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">{selectedDay} Schedule</span>
                  <h2 className="text-xl font-bold text-slate-900 mt-0.5">{weeklyPlan[selectedDay].title}</h2>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${weeklyPlan[selectedDay].statusColor}`}>
                  {weeklyPlan[selectedDay].kidStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-xs bg-slate-50 p-3 rounded-xl">
                <div>
                  <span className="text-slate-400 block font-medium">Driver / Responsibility</span>
                  <span className="font-semibold text-slate-700">{weeklyPlan[selectedDay].driver}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Prep Commitment</span>
                  <span className="font-semibold text-slate-700">{weeklyPlan[selectedDay].prepTime}</span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-amber-500" /> Menu Items
              </h3>
              <ul className="space-y-2 mb-6">
                {weeklyPlan[selectedDay].items.map((item, idx) => (
                  <li key={idx} className="text-sm bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                  <ShieldAlert className="w-4 h-4 text-rose-600" /> Son (5yo) Adaptation Rule
                </h4>
                <p className="text-xs text-rose-800 leading-relaxed">
                  {weeklyPlan[selectedDay].sonAdaptation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GROCERY LIST */}
        {activeTab === 'groceries' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Weekly Grocery Checklist</h2>
                <p className="text-xs text-slate-500">Auto-populated based on weekly hybrid menu</p>
              </div>
              <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                {groceries.filter(g => g.checked).length} of {groceries.length} Completed
              </div>
            </div>

            <div className="space-y-3">
              {groceries.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleGrocery(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    item.checked 
                      ? 'bg-slate-50 border-slate-200 text-slate-400 line-through' 
                      : 'bg-white border-slate-200 text-slate-800 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.checked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300 shrink-0" />
                    )}
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full ${
                    item.checked ? 'bg-slate-200 text-slate-500' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: WORKFLOW */}
        {activeTab === 'workflow' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">15-Minute Kitchen Meltdown Protocol</h2>
              <p className="text-xs text-slate-500">Designed for 5:30 PM pickup to 6:00 PM dinner window (Post-Helper Era)</p>
            </div>

            <div className="space-y-4">
              {meltdownWorkflow.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-slate-100 bg-slate-50 rounded-xl items-start">
                  <div className="bg-amber-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg shrink-0">
                    {step.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">{step.task}</h3>
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}