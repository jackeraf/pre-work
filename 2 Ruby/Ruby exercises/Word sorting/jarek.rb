hello= "Fools fall for foolish follies."
jarek= hello.split
def jarek.each do |s|
    s.gsub! (/[?.!,;]?$/, '')
end
matias= jarek.sort_by { |x| x.downcase }
puts matias
