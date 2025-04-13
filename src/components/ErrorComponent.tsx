import { ErrorProps } from "@/constants/type";

const ErrorComponent = ({ errorMessage = "Unknown error" }: ErrorProps) => {
    return (
        <div className="flex justify-center items-center h-[600px] text-2xl font-mono font-semibold text-red-600">
            <p>Error: <span>{errorMessage}</span></p>
        </div>
    );
};

export default ErrorComponent;
