{/* Membership Form Section */}
<div className="mt-16">
  <h2 className="text-3xl font-bold text-center mb-6">HERBALLY (PTY) LTD</h2>
  <h3 className="text-xl font-semibold text-center mb-10">🌱 HERBALLY Membership Form — Private Club</h3>

  <form className="max-w-4xl mx-auto space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
    {/* Personal Information */}
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block mb-1 font-medium">Full Name</label>
        <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Date of Birth</label>
        <input type="date" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div>
        <label className="block mb-1 font-medium">ID Number / Passport</label>
        <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Contact Number</label>
        <input type="tel" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div className="md:col-span-2">
        <label className="block mb-1 font-medium">Email Address</label>
        <input type="email" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
      <div className="md:col-span-2">
        <label className="block mb-1 font-medium">Residential Address</label>
        <textarea className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" rows={2}></textarea>
      </div>
    </div>

    {/* Emergency Contact */}
    <div>
      <h4 className="text-lg font-semibold mt-4">Emergency Contact</h4>
      <div className="grid gap-4 md:grid-cols-3 mt-2">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Relationship</label>
          <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input type="tel" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
        </div>
      </div>
    </div>

    {/* Membership Details */}
    <div>
      <h4 className="text-lg font-semibold mt-4">Membership Details</h4>
      <div className="grid gap-4 md:grid-cols-2 mt-2">
        <div>
          <label className="block mb-1 font-medium">Preferred Membership Tier</label>
          <select className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700">
            <option>Standard</option>
            <option>VSC Member</option>
            <option>Premium (invite only)</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Reason for Joining the Club</label>
          <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">How did you hear about us?</label>
          <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
        </div>
      </div>
    </div>

    {/* Terms & Agreement */}
    <div className="space-y-3">
      <div className="flex items-start space-x-2">
        <input type="checkbox" className="mt-1" />
        <label className="text-sm">I confirm that I am of legal age and agree to comply with all club policies.</label>
      </div>
      <div className="flex items-start space-x-2">
        <input type="checkbox" className="mt-1" />
        <label className="text-sm">I understand this is a private membership for a wellness-focused community.</label>
      </div>
      <div className="flex items-start space-x-2">
        <input type="checkbox" className="mt-1" />
        <label className="text-sm">I agree not to share or distribute club products with non-members.</label>
      </div>
    </div>

    {/* Signature + Submit */}
    <div className="grid gap-4 md:grid-cols-2 mt-6">
      <div>
        <label className="block mb-1 font-medium">Signature</label>
        <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" placeholder="Type full name as digital signature" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Date</label>
        <input type="date" className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-gray-800 dark:border-gray-700" />
      </div>
    </div>

    <div className="pt-4 text-center">
      <Button type="submit" className="px-8 py-2 text-lg">
        Submit Application
      </Button>
    </div>
  </form>
</div>
