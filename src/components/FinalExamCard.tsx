import { FinalExam, LectureSchedule } from "@/app/api/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, AlertTriangleIcon, Loader2Icon } from "lucide-react";

interface FinalExamCardProps {
  loading: boolean;
  error?: string | null;
  finalExam?: FinalExam;
  lectureSchedule?: LectureSchedule;
  crn: string;
}

export const FinalExamCard = ({ 
  loading, 
  error, 
  finalExam, 
  lectureSchedule,
  crn
}: FinalExamCardProps) => {
  if (loading) {
    return (
      <Card className="border shadow-sm rounded-xl overflow-hidden transition-all duration-300 h-full bg-white">
        <div className="bg-gray-50 px-4 py-2 border-b">
          <p className="text-sm font-medium text-gray-500">CRN: {crn}</p>
        </div>
        <CardContent className="p-8 flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <Loader2Icon className="h-6 w-6 text-[#820000] animate-spin" />
            <p className="text-sm text-gray-500">Loading exam details...</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (error) {
    return (
      <Card className="border shadow-sm rounded-xl overflow-hidden transition-all duration-300 h-full bg-white">
        <div className="bg-red-50 px-4 py-2 border-b">
          <p className="text-sm font-medium text-red-700">CRN: {crn}</p>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-red-100 p-2 flex-shrink-0">
              <AlertTriangleIcon className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-red-700 mb-1">Error</h4>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!lectureSchedule || !finalExam) {
    return (
      <Card className="border shadow-sm rounded-xl overflow-hidden transition-all duration-300 h-full bg-white">
        <div className="bg-yellow-50 px-4 py-2 border-b">
          <p className="text-sm font-medium text-yellow-700">CRN: {crn}</p>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-yellow-100 p-2 flex-shrink-0">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-medium text-yellow-700 mb-1">No Data Available</h4>
              <p className="text-sm text-yellow-600">Could not find exam information for this course.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border shadow-sm rounded-xl overflow-hidden transition-all duration-300 bg-white">
      <div className="bg-[#820000] px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-white">CRN: {crn}</p>
          </div>
          <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">
            {lectureSchedule.days}
          </Badge>
        </div>
      </div>
      
      <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">{lectureSchedule.beginTime} - {lectureSchedule.endTime}</span>
        </div>
      </div>
      
      <CardContent className="p-0">
        {finalExam.success ? (
          <div className="p-4">
            <div className="mb-3">
              <h3 className="font-semibold text-gray-800 mb-1">Final Exam</h3>
            </div>
            
            <div className="rounded-md bg-[#820000]/10 p-4 border border-[#820000]/20">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#820000] rounded-full p-1.5 flex-shrink-0">
                    <CalendarIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-medium text-sm">{finalExam.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#820000] rounded-full p-1.5 flex-shrink-0">
                    <ClockIcon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="font-medium text-sm">{finalExam.examTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-orange-100 p-2 flex-shrink-0">
                <AlertTriangleIcon className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h4 className="font-medium text-orange-700 mb-1">No Exam Found</h4>
                <p className="text-sm text-orange-600">This course may not have a traditional final exam. Please check with your instructor.</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};