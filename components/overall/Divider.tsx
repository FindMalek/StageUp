import { FaPlus } from "react-icons/fa6";

export default function PlusDivider() {
  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <FaPlus className="h-3 w-3 text-gray-500" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
