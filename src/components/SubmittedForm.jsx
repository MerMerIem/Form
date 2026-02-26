function SubmittedForm() {
  return (
    <div className="fixed inset-0 bg-placeholder bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Application Submitted Successfully!</h2>
        <p className="text-gray-700">Thank you for submitting your application. We will review it shortly.</p>
      </div>
    </div>
  );
}

export default SubmittedForm;
